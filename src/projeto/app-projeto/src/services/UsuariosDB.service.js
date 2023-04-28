import Database from './Banco.service.js'

const DB_EXEC = Database.getConnection();

export const getUsuarios = async () => {

    let results = await DB_EXEC(`SELECT * FROM usuarios`);

    console.log(results.rows);

    return results.rows._array;
}

export const insertUsuarios = async (params) => {

    let results = await DB_EXEC(
        `INSET INTO USUARIOS (nome, email, senha) VALUES (?, ?, ?)`,
        [params.nome, params.email, params.senha]
    );

    return results.rowsAffected;

}