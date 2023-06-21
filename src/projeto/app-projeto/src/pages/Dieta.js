import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { FontAwesome5 } from '@expo/vector-icons';

import BottomNavigation from '../components/BottomNavigation.js';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import * as UsuarioService from '../services/Usuario.service';
import * as DietaDB from '../services/DietaDB.service.js';
import * as Utils from '../Utils/Utils.js';

const Dieta = () => {

    const [editandoDieta, setEditandoDieta] = useState(false);

    const [dietas, setDietas] = useState([]);

    const [infosDieta, setInfosDieta] = useState(null);

    const [horario, setHorario] = useState('');
    const [refeicao, setRefeicao] = useState('');
    const [observacao, setObservacao] = useState('');

    const handleHoraMinutoChange = (value) => {

        setHorario(Utils.formataHora(value));

    };

    const buscarDietas = async () => {

        const usuarioLogado = await UsuarioService.getUsuarioStorage();

        let dietasUsuario = await DietaDB.getDietas(usuarioLogado.id);

        setDietas(dietasUsuario);

    };

    const handleAdicionarPress = () => {

        setEditandoDieta(true);

    };

    const handleEditarPress = (dieta) => {

        setInfosDieta(dieta);

        setHorario(dieta.horario);
        setRefeicao(dieta.refeicao);
        setObservacao(dieta.observacao);

        setEditandoDieta(true);

    };

    const handleRemoverPress = async (dietaId) => {

        let remover = confirm('Remover essa refeição?');
        if (!remover) return;

        const usuarioLogado = await UsuarioService.getUsuarioStorage();

        await DietaDB.removeDieta({
            id: dietaId,
            usuarioId: usuarioLogado.id
        });

        buscarDietas();

    };

    const adicionarBanco = async () => {

        try {

            const usuarioLogado = await UsuarioService.getUsuarioStorage();

            await DietaDB.insertDieta({
                usuarioId: usuarioLogado.id,
                horario: horario,
                refeicao: refeicao,
                observacao: observacao
            }).then();

            fecharEdicao();

            buscarDietas();

        } catch (err) {

            alert(err);

        }

    }

    const editarBanco = async () => {

        try {

            const usuarioLogado = await UsuarioService.getUsuarioStorage();

            await DietaDB.updateDieta({
                id: infosDieta.id,
                usuarioId: usuarioLogado.id,
                horario: horario,
                refeicao: refeicao,
                observacao: observacao
            }).then();

            fecharEdicao();

            buscarDietas();

        } catch (err) {

            alert(err);

        }

    }

    const fecharEdicao = () => {

        setEditandoDieta(false);

        setInfosDieta(null);

        setHorario('');
        setRefeicao('');
        setObservacao('');

    }

    useEffect(() => {

        buscarDietas();

    }, []);


    return (
        <View style={{margin: 20}}>
            <Header>
            </Header>

            <Body>
                {editandoDieta ?
                    // EDITAR / ADICIONAR
                    <View style={styles.container}>
                        <View style={styles.header}>
                            {infosDieta ?
                                <Text style={styles.titulo}>Editando Dieta</Text>
                                :
                                <Text style={styles.titulo}>Adicionando Dieta</Text>
                            } 
                        </View>

                        <View style={styles.lista}>
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                    format: 'HH:MM',
                                }}
                                placeholder="Horário"
                                value={horario}
                                onChangeText={handleHoraMinutoChange}
                                style={styles.input}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Refeição"
                                keyboardType="string"
                                value={refeicao}
                                onChangeText={(texto) => setRefeicao(texto)}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Observação"
                                keyboardType="string"
                                value={observacao}
                                onChangeText={(texto) => setObservacao(texto)}
                            />

                            <View style={styles.botoesSalvar}>
                                {infosDieta ?
                                    <TouchableOpacity style={styles.botaoSalvar}>
                                        <Text style={styles.textoBotaoSalvar} onPress={editarBanco}>Editar</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.botaoSalvar}>
                                        <Text style={styles.textoBotaoSalvar} onPress={adicionarBanco}>Adicionar</Text>
                                    </TouchableOpacity>
                                }
                            </View>

                            <View style={styles.botoesVoltar}>
                                <TouchableOpacity style={styles.botaoVoltar}>
                                    <Text style={styles.textoBotaoVoltar} onPress={fecharEdicao}>Voltar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    :
                    // LISTA
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.titulo}>Dieta</Text>
                            <TouchableOpacity style={styles.botaoAdicionar}>
                                <Text style={styles.textoBotaoAdicionar} onPress={handleAdicionarPress}>ADICIONAR</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.lista}>
                            {dietas.map((item, index) => (
                                <View style={styles.itemLista} key={index}>
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.horario}>{item.horario}</Text>
                                        <Text style={styles.refeicao}>{item.refeicao}</Text>
                                        <Text style={styles.obervacao}>OBS.: {item.observacao}</Text>
                                    </View>

                                    <View style={styles.botoesContainer}>
                                        <TouchableOpacity
                                            style={styles.icon}
                                            onPress={() => handleEditarPress(item)}>
                                            <FontAwesome5 name="pen" size={24} color="#3e3e3e" />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={styles.icon}
                                            onPress={() => handleRemoverPress(item.id)}>
                                            <FontAwesome5 name="trash" size={24} color="#3e3e3e" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                }
            </Body>

            <BottomNavigation currentBottomNavigationTabIndex={1} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,

    },
    botaoAdicionar: {
        backgroundColor: '#C84B4B',
        width: 100,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.2rem'
    },
    textoBotaoAdicionar: {
        color: 'white',
        fontWeight: 'bold',
    },
    botoesSalvar: {
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center'
    },
    botaoSalvar: {
        backgroundColor: '#C84B4B',
        width: 130,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.2rem'
    },
    textoBotaoSalvar: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 600
    },
    botoesVoltar: {
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center'
    },
    botaoVoltar: {
        backgroundColor: '#9d9d9d',
        width: 130,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.2rem'
    },
    textoBotaoVoltar: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 600
    },
    lista: {
        flex: 1,
    },
    itemLista: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingTop: '1rem',
        paddingStart: '0.5rem',
        paddingBottom: '1rem',
        paddingEnd: '1rem',
        backgroundColor: '#F8E5E5',
        borderRadius: '0.2rem'
    },
    infoContainer: {
        flexDirection: 'column',
        minHeight: 70
    },
    horario: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 10
    },
    refeicao: {
        fontSize: 16,
        marginBottom: 10
    },
    botoesContainer: {
        flexDirection: 'column',
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between'
    }
});

export default Dieta;