import React, { useEffect, useState } from 'react';
import BottomNavigation from '../components/BottomNavigation.js';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import { Text, TextInput } from 'react-native-paper';
import * as UsuariosDB from '../services/UsuariosDB.service.js';
import * as UsuarioService from '../services/Usuario.service.js';
import { Button, TouchableOpacity, View } from 'react-native';


const Usuario = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editing, setEditing] = useState(false);
 
    useEffect(() => {

        async function fetchUserData() {

            try {

                const usuarioLogado = await UsuarioService.getUsuarioStorage()

                const usuario = await UsuariosDB.getUsuario({ id: usuarioLogado.id });
                
                if(usuario && !editing){
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

    const saveAtt = () => {
        setEditing(true);
    };

    const updateUser = async () => {
        const usuarioLogado = await UsuarioService.getUsuarioStorage()
        try {
          await UsuariosDB.updateUsuario({
            id: usuarioLogado.id,
            nome: name,
            email: email,
          });

          const usuario = await UsuariosDB.getUsuario({ id: usuarioLogado.id });

          UsuarioService.setUsuarioStorage(usuario)
          setEditing(false);
        } catch (error) {
          console.error('Erro ao atualizar o usuário:', error);
        }
    };

    return (
        <>
            <Header>
            </Header>

            <Body>
                <TextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Nome"
                    editable={editing}
                >
                </TextInput>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                    editable={editing}
                >
                </TextInput>
                {editing ? (
                    <Button title="Salvar" color="green" onPress={updateUser} />
                ) : (
                    <Button title="Editar" color="blue" onPress={saveAtt} />
                )}
                <Button title="Deslogar" color="red" onPress={deslogar} />
            </Body>
           
            <BottomNavigation currentBottomNavigationTabIndex={5} />

        </>
    );

};

export default Usuario;