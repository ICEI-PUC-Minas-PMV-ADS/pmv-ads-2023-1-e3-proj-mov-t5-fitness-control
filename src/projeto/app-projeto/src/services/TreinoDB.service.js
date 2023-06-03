import Database from './Banco.service.js'

const DB_EXEC = Database.getConnection();

export const getTreinos = async (usuarioId, diaSemana) => {

    let results = await DB_EXEC(`
        SELECT
            id,
            usuario_id AS "usuarioId",
            dia_semana AS "diaSemana",
            ordem,
            exercicio,
            descricao
        FROM treino
        WHERE
            usuario_id = ${usuarioId}
            AND dia_semana = ${diaSemana}
    `);

    return results.rows && results.rows.length ? [...results.rows] : [];
    
}

export const insertTreino = async (params) => {

    let results = await DB_EXEC(`
        INSERT INTO treino (usuario_id, dia_semana, ordem, exercicio, descricao)
        VALUES (?, ?, ?, ?, ?)
    `, [params.usuarioId, params.diaSemana, params.ordem, params.exercicio, params.descricao]
    );

    return results.rowsAffected;

}

export const updateTreino = async (params) => {

    let results = await DB_EXEC(`
        UPDATE treino 
        SET
            exercicio = '${params.exercicio}',
            ordem = ${params.ordem},
            dia_semana = ${params.diaSemana}
        WHERE
            id = ${params.id}
            AND usuario_id = ${params.usuarioId}
    `);

    return results.rowsAffected;

}

export const removeTreino = async (params) => {

    let results = await DB_EXEC(`
        DELETE FROM treino 
        WHERE
            id = ${params.id}
            AND usuario_id = ${params.usuarioId}
    `);

    return results.rowsAffected;

}