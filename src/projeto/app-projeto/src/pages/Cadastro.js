import { useState } from 'react';
import React from 'react';
import { Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { insertUsuarios, getUsuarios } from '../services/UsuariosDB.service';

const Cadastro = () => {

    const navigation = useNavigation();

    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const cadastrar = () => {

        insertUsuarios({
            nome: nome,
            email: email,
            senha: senha
        }).then();

        

        navigation.navigate('Login');

    }

    return (
        <>
            <Text style={styles.titulo}>
                CADASTRO
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                keyboardType="string"
                value={nome}
                onChangeText={(texto) => setNome(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="string"
                value={email}
                onChangeText={(texto) => setEmail(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="string"
                value={senha}
                onChangeText={(texto) => setSenha(texto)}
            />

            <Button
                title="Cadastrar"
                color='red'
                onPress={cadastrar}
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
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,

    }
});

export default Cadastro;