import Database from './Banco.service.js'

const DB_EXEC = Database.getConnection();

export const getUsuarios = async () => {

    let results = await DB_EXEC(`SELECT * FROM usuarios`);

    return results.rows._array;
}

export const insertUsuarios = async (params) => {

    let results = await DB_EXEC(
        `INSERT INTO USUARIOS (nome, email, senha) VALUES (?, ?, ?)`,
        [params.nome, params.email, params.senha]
    );

    return results.rowsAffected;

}

export const getLoginUsuario = async (params) => {

    let results = await DB_EXEC(
        `SELECT * FROM usuarios WHERE email = '${params.email}' and senha = '${params.senha}'`
    );

    return results.rows && results.rows.length ? results.rows[0] : null;

}