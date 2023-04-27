import * as SQLite from 'expo-sqlite';

const Database = {

    getConnection: () => {
        const db = SQLite.openDatabase('fitness-control.db');

        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE if not exists usuarios(id integer primary key not null, nome text not null, email text note null,senha text not null);');


            tx.executeSql('CREATE TABLE if not exists dieta(id integer primary key not null, horario text not null, refeicao text not null, observacao text);');


            tx.executeSql('CREATE TABLE if not exists treino(id integer primary key not null, dia_semana integer not null, ordem integer not null, exercicio text not null, descricao text);');


            tx.executeSql('CREATE TABLE if not exists calendario(id integer primary key not null, data date not null, treino_check boolean default false, dieta_check boolean default false);');

            //Adicionando foreing keys

            tx.executeSql('ALTER TABLE dieta add COLUMN usuario_id INTEGER REFERENCES usuarios(id)')

            tx.executeSql('ALTER TABLE treino add COLUMN usuario_id INTEGER REFERENCES usuarios(id)')

            tx.executeSql('ALTER TABLE calendario add COLUMN usuario_id INTEGER REFERENCES usuarios(id)')
        });

        const ExecuteQuery = (sql, params = []) =>
            new Promise((resolve, reject) => {
                db.transaction((trans) => {
                    trans.executeSql(
                        sql,
                        params,
                        (trans, results) => {
                            resolve(results);
                        },
                        (error) => {
                            reject(error);
                        }
                    );
                });
            });

        return ExecuteQuery;
    }


}





export default Database;
