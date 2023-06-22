import Database from './Banco.service.js'

const DB_EXEC = Database.getConnection();

export const getDataCalendario = async (data) => {

    let results = await DB_EXEC(`
        SELECT * FROM calendario WHERE data = '${data}'
    `);

    return results.rows && results.rows.length ? results.rows[0] : null;
}

export const insertDietaCalendario = async (params) => {

    let calendario = await getDataCalendario(params);

    let results;

    if (calendario) {

        results = await DB_EXEC(`
            UPDATE calendario
            SET
                dieta_check = ${params.realizado}
            WHERE
                usuario_id = ${params.usuarioId}
                AND data = '${params.data}'
        `);

    } else {

        results = await DB_EXEC(`
            INSERT INTO calendario (data, usuario_id, dieta_check, treino_check)
            VALUES (?, ?, ?, ?)
        `, [params.data, params.usuarioId, params.realizado, 0]
        );

    }

    return results.rowsAffected;

}

export const insertTreinoCalendario = async (params) => {

    let calendario = await getDataCalendario(params);

    let results;

    if (calendario) {

        results = await DB_EXEC(`
            UPDATE calendario
            SET treino_check = ${params.realizado}
            WHERE
                usuario_id = ${params.usuarioId}
                AND data = '${params.data}'
        `);

    } else {

        results = await DB_EXEC(`
            INSERT INTO calendario (data, usuario_id, treino_check, dieta_check)
            VALUES (?, ?, ?, ?)
        `, [params.data, params.usuarioId, params.realizado, 0]
        );

    }

    return results.rowsAffected;

}