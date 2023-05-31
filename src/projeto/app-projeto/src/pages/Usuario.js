import React, { useEffect, useState } from 'react';
import BottomNavigation from '../components/BottomNavigation.js';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import { Text, TextInput } from 'react-native-paper';
import * as UsuariosDB from '../services/UsuariosDB.service.js';
import * as UsuarioService from '../services/Usuario.service.js';
import { Button,TouchableOpacity } from 'react-native';


const Usuario = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {

        async function fetchUserData() {

            try {

                const usuarioLogado = await UsuarioService.getUsuarioStorage()

                const usuario = await UsuariosDB.getUsuario({ id: usuarioLogado.id });
                
                if(usuario){
                    setName(usuario.nome)
                    setEmail(usuario.email)
                }
                
    
            } catch(error) {
                console.error('Erro ao obter os usuários do banco de dados:', error);
            }

        }

        fetchUserData();

    }, []);
    
    const deslogar =  ()=>{
        UsuarioService.removeUsuarioStorage();
        navigation.navigate('Login')
    }

    const saveAtt =  ()=>{

    }

    return (
        <>
            <Header>
            </Header>

            <Body>
                <TextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Nome"
                >
                </TextInput>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Nome"
                >
                </TextInput>
                <Button title="Salvar Alterações" color="blue" onPress={saveAtt} />
                <Button title="Deslogar" color="red" onPress={deslogar} />
            </Body>
           
            <BottomNavigation currentBottomNavigationTabIndex={5} />

        </>
    );

};

export default Usuario;