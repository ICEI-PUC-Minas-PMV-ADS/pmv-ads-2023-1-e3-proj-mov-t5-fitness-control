export const formataHora = (horario) => {

    if (horario && horario.length) {

        const hora = horario.slice(0, 2);
        const minuto = horario.slice(3, 5);

        let novaHora = hora || '';
        
        if (parseInt(hora) > 23) {
            novaHora = 23;
        }

        let novoMinuto = minuto || '';

        if (parseInt(minuto) > 59) {
            novoMinuto = 59;
        }

        return `${novaHora}${novoMinuto ? ':' : ''}${novoMinuto}`;

    } else {

        return horario;

    }

}