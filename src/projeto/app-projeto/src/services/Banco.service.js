import * as SQLite from 'expo-sqlite';

const Database = {

    getConnection: () => {

        const db = SQLite.openDatabase('fitness-control.db');

        db.transaction((tx) => {
            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome VARCHAR NOT NULL,
                    email VARCHAR NOT NULL,
                    senha VARCHAR NOT NULL
                );
            `);

            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS dieta (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    usuario_id INTEGER REFERENCES usuarios(id),
                    horario VARCHAR NOT NULL,
                    refeicao VARCHAR NOT NULL,
                    observacao VARCHAR
                );
            `);

            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS treino (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    usuario_id INTEGER REFERENCES usuarios(id),
                    dia_semana integer VARCHAR NOT NULL,
                    ordem integer VARCHAR NOT NULL,
                    exercicio VARCHAR NOT NULL,
                    descricao VARCHAR
                );
            `);

            tx.executeSql(`
                CREATE TABLE IF NOT EXISTS calendario (
                    data DATE PRIMARY KEY NOT NULL,
                    usuario_id INTEGER REFERENCES usuarios(id),
                    treino_check BOOLEAN NOT NULL DEFAULT false,
                    dieta_check BOOLEAN NOT NULL DEFAULT false
                );
            `);
        });

        const ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {

            db.transaction((trans) => {

                trans.executeSql(sql, params,
                    (trans, results) => {

                        resolve(results);

                    }, (error) => {

                        reject(error);

                    }
                );

            });

        });

        return ExecuteQuery;

    }

}

export default Database;