import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as UsuarioService from '../services/Usuario.service';

const Login = () => {

    const navigation = useNavigation();

    const [senha, setSenha] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const [login, setLogin] = useState('');

    const logar = () => {

        try {

            if (login && senha) {

                // CONSULTAR USUARIO BANCO

                // VALIDA SENHA
                if (true) {

                    // ARMAZENAR TODOS OS DADOS DO USUARIO
                    UsuarioService.setUsuarioStorage({ id: 1 });

                    navigation.navigate('Home');

                } else {

                    throw new Error('Usuário ou senha inválidos!');

                }

            } else {

                throw new Error('Necessário informar usuário e senha!');

            }

        } catch (err) {

            alert(err.message);

        }

    }

    return (
        <>
            <Text style={styles.titulo}>
                FITNESS CONTROL
            </Text>

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="string"
                    value={login}
                    onChangeText={(texto) => setLogin(texto)}
                />
            </View>

            <View style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#000000"
                    value={senha}
                    onChangeText={(texto) => setSenha(texto)}
                    secureTextEntry={hidePass}
                />

                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setHidePass(!hidePass)}>
                    {hidePass ? (
                        <Ionicons name="eye" color="#FFFFFF" size={25} />
                    ) : (
                        <Ionicons name="eye-off" color="#FFFFFF" size={25} />
                    )}
                </TouchableOpacity>
            </View>

            <Button title="Acessar" color="red" onPress={logar} />

            <Button title="Cadastrar" color="gray"
                onPress={() => { navigation.navigate('Cadastro'); }}
            />
        </>
    );

};

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        fontSize: 18,
        color: '#000000',
        width: '100%',
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputArea: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: '15%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    }
});

export default Login;