import Database from './Banco.service.js'

const DB_EXEC = Database.getConnection();

export const getUsuarios = async () =>{
    let results = await DB_EXEC(`select * from usuarios`)
    console.log(results)
    return results.rows._array;
}

export const insertUsuarios = async (params) =>{
    let results = await DB_EXEC(`insert into usuarios (nome, email, senha) values (?, ?, ?)`, [params.nome, params.email, params.senha])
    console.log(results)

    return results.rowsAffected;
}

