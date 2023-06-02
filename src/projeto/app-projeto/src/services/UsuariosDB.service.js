import Database from './Banco.service.js'

const DB_EXEC = Database.getConnection();

export const getUsuario = async (params) => {

    let results = await DB_EXEC(`
        SELECT * FROM usuarios WHERE id = ${params.id}
    `);

    return results.rows && results.rows.length ? results.rows[0] : null;
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

export const updateUsuario = async (params) => {

    let results = await DB_EXEC(`
        UPDATE usuarios 
        SET
            nome = '${params.nome}',
            email = '${params.email}'  
        WHERE
            id = ${params.id}
    `);

    return results.rowsAffected;

}