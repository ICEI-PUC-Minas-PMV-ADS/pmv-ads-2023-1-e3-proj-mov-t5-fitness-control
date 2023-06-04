import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import BottomNavigation from '../components/BottomNavigation.js';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import WeekDays from '../components/WeekDays.js';
import * as UsuarioService from '../services/Usuario.service';
import * as TreinoDB from '../services/TreinoDB.service.js';
import DropdownWeekDay from '../components/DropdownWeekDay.js';


const Treinos = () => {
    const [editandoTreino, setEditandoTreino] = useState(false);

    const [Treinos, setTreinos] = useState([]);

    const [infosTreino, setInfosTreino] = useState(null);

    const [diaSemana, setDiaSemana] = useState(0);
    const [ordem, setOrdem] = useState(1);
    const [exercicio, setExercicio] = useState('');
    const [descricao, setDescricao] = useState('');


    const buscarTreinos = async (dayNumber) => {
        const diaDaSemana = dayNumber !== undefined ? dayNumber : new Date().getDay()

        const usuarioLogado = await UsuarioService.getUsuarioStorage();

        let treinosUsuario = await TreinoDB.getTreinos(usuarioLogado.id, diaDaSemana);

        setTreinos(treinosUsuario);

    };

    const handleAdicionarPress = () => {
        let novaOrdem = Array.isArray(Treinos) ? Treinos.length + 1 : 1
        setOrdem(novaOrdem)
        setEditandoTreino(true);

    };

    const handleEditarPress = (treino) => {

        setInfosTreino(treino);

        setDiaSemana(treino.diaSemana);
        setOrdem(treino.ordem);
        setExercicio(treino.exercicio);
        setDescricao(treino.descricao);

        setEditandoTreino(true);

    };

    const handleRemoverPress = async (treinoId) => {

        let remover = confirm('Remover esse Treino?');
        if (!remover) return;

        const usuarioLogado = await UsuarioService.getUsuarioStorage();

        await TreinoDB.removeTreino({
            id: treinoId,
            usuarioId: usuarioLogado.id
        });

        buscarTreinos();

    };

    const handleDayChange = (dia) => {
        setDiaSemana(dia.value)
    }

    const adicionarBanco = async () => {

        try {

            const usuarioLogado = await UsuarioService.getUsuarioStorage();

            await TreinoDB.insertTreino({
                usuarioId: usuarioLogado.id,
                diaSemana: diaSemana,
                ordem: ordem,
                exercicio: exercicio,
                descricao: descricao
            }).then();

            fecharEdicao();

            buscarTreinos();

        } catch (err) {

            alert(err);

        }

    }

    const editarBanco = async () => {

        try {

            const usuarioLogado = await UsuarioService.getUsuarioStorage();

            await TreinoDB.updateTreino({
                id: infosTreino.id,
                usuarioId: usuarioLogado.id,
                diaSemana: diaSemana,
                exercicio: exercicio,
                ordem: ordem
            }).then();

            fecharEdicao();

            buscarTreinos();

        } catch (err) {

            alert(err);

        }

    }

    const fecharEdicao = () => {

        setEditandoTreino(false);

        setInfosTreino(null);

        setDiaSemana(0);
        setOrdem(0);
        setExercicio('');
        setDescricao('');

    }

    const handlerWeekday = async (dia) => {
        buscarTreinos(dia)
    }

    useEffect(() => {
        buscarTreinos();
    }, []);

    return (
        <>
            <Header>
            </Header>

            <Body>
                {editandoTreino ?
                    <View style={styles.container}>
                        <View style={styles.header}>
                            {infosTreino ?
                                <Text style={styles.titulo}>Editando Treino</Text>
                                :
                                <Text style={styles.titulo}>Adicionando Treino</Text>
                            }
                        </View>

                        <View style={styles.lista}>
                            <DropdownWeekDay diaSemanaSelecionada={diaSemana} onChange={handleDayChange} />

                            <TextInput
                                style={styles.input}
                                placeholder="Exercício"
                                keyboardType="string"
                                value={exercicio}
                                onChangeText={(texto) => setExercicio(texto)}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Descrição Exercício"
                                keyboardType="string"
                                value={descricao}
                                onChangeText={(texto) => setDescricao(texto)}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Ordem do Exercício"
                                keyboardType="number"
                                value={ordem}
                                onChangeText={(texto) => setOrdem(texto)}
                            />

                            <View style={styles.botoesSalvar}>
                                {infosTreino ?
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
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.titulo}>Treinos</Text>
                            <TouchableOpacity style={styles.botaoAdicionar}>
                                <Text style={styles.textoBotaoAdicionar} onPress={handleAdicionarPress}>ADICIONAR</Text>
                            </TouchableOpacity>
                        </View>
                        <WeekDays selectedDay={new Date().getDay()} onPress={handlerWeekday} />
                        <View style={styles.lista}>
                            {Treinos.map((item, index) => (
                                <View style={styles.itemLista} key={index}>
                                    <View style={styles.infoContainer}>
                                        <Text style={styles.horario}>{item.exercicio}</Text>
                                        <Text style={styles.descricao}>{item.descricao}</Text>
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

            <BottomNavigation currentBottomNavigationTabIndex={2} />

        </>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
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

export default Treinos;