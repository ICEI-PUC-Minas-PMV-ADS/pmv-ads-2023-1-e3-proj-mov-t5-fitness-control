import { useState } from 'react';
import React from 'react';
import { Text, StyleSheet, Button, TextInput, Modal, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { insertUsuarios, getUsuarios } from '../services/UsuariosDB.service';

const Cadastro = () => {

    const navigation = useNavigation();

    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');


    const validarEmail = (email) => {
        // Expressão regular para validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validarSenha = (senha) => {
        // Verificar se a senha possui pelo menos 6 caracteres
        if (senha.length < 8) {
            return 'A senha deve ter pelo menos 8 caracteres.';
        }
        // Verificar se a senha possui algum número
        if (!/\d/.test(senha)) {
            return 'A senha deve conter pelo menos um número.';
        }
        // Verificar se a senha possui alguma letra maiúscula
        if (!/[A-Z]/.test(senha)) {
            return 'A senha deve conter pelo menos uma letra maiúscula.';
        }
        // Verificar se a senha possui algum caractere especial
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
            return 'A senha deve conter pelo menos um caractere especial.';
        }
        // Senha válida
        return '';
    };

    const cadastrar = () => {

        if (!validarEmail(email)) {
            setModalMessage('E-mail inválido. Por favor, insira um e-mail válido.');
            setModalVisible(true);
            return;
        }

        const senhaValidacao = validarSenha(senha);
        if (senhaValidacao !== '') {
            setModalMessage(senhaValidacao);
            setModalVisible(true);
            return;
        }


        insertUsuarios({
            nome: nome,
            email: email,
            senha: senha
        }).then();

        navigation.navigate('Login');

    }



    return (
        <View style={{margin: 20}}>
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

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalMessage}>{modalMessage}</Text>
                        <Button title="OK" onPress={() => setModalVisible(false)}  color="red"/>
                    </View>
                </View>
            </Modal>
        </View>
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

    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    modalMessage: {
        marginBottom: 10
    }
});

export default Cadastro;