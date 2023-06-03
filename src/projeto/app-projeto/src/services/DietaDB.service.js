import Database from './Banco.service.js'

const DB_EXEC = Database.getConnection();

export const getDietas = async (usuarioId) => {

    let results = await DB_EXEC(`
        SELECT * FROM dieta WHERE usuario_id = ${usuarioId}
    `);

    return results.rows && results.rows.length ? [...results.rows] : [];
    
}

export const insertDieta = async (params) => {

    let results = await DB_EXEC(`
        INSERT INTO dieta (usuario_id, horario, refeicao, observacao)
        VALUES (?, ?, ?, ?)
    `, [params.usuarioId, params.horario, params.refeicao, params.observacao]
    );

    return results.rowsAffected;

}

export const updateDieta = async (params) => {

    let results = await DB_EXEC(`
        UPDATE dieta 
        SET
            horario = '${params.horario}',
            refeicao = '${params.refeicao}',
            observacao = '${params.observacao}'
        WHERE
            id = ${params.id}
            AND usuario_id = ${params.usuarioId}
    `);

    return results.rowsAffected;

}

export const removeDieta = async (params) => {

    let results = await DB_EXEC(`
        DELETE FROM dieta 
        WHERE
            id = ${params.id}
            AND usuario_id = ${params.usuarioId}
    `);

    return results.rowsAffected;

}