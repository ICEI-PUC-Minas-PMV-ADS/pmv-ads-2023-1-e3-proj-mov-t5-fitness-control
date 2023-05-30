import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as UsuarioService from '../services/Usuario.service.js';
import UsuarioServiceClass from '../services/Usuario.service';

import Login from '../pages/Login.js';
import Cadastro from '../pages/Cadastro.js';

import Home from '../pages/Home.js';
import Dieta from '../pages/Dieta.js';
import Treinos from '../pages/Treinos.js';
import Calendario from '../pages/Calendario.js';
import Usuario from '../pages/Usuario.js';


const Stack = createNativeStackNavigator();

const Main = () => {

    const [usuarioLogado, setUsuarioLogado] = useState(null);

    useEffect(() => {

        // EVENTO DE ALTERACAO DO USUARIO
        UsuarioServiceClass.usuarioLogadoChangeObservable.subscribe(usuario => {
        
            getToken();
    
        });

        async function getToken() {

            const usuario = await UsuarioService.temUsuarioLogado();

            setUsuarioLogado(usuario);

        }

        getToken();

    }, []);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                usuarioLogado ? (
                    <>
                        <Stack.Screen
                            name="Home"
                            component={Home} />
                        <Stack.Screen
                            name="Dieta"
                            component={Dieta} />
                        <Stack.Screen
                            name="Treinos"
                            component={Treinos} />
                        <Stack.Screen
                            name="Calendario"
                            component={Calendario} />
                        <Stack.Screen
                            name="Usuario"
                            component={Usuario} />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={Login} />
                        <Stack.Screen
                            name="Cadastro"
                            component={Cadastro} />
                    </>
                )
            }
        </Stack.Navigator>
    );

};

export default Main;