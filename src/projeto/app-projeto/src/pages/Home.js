import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import BottomNavigation from '../components/BottomNavigation.js';
import Header from '../components/Header.js';
import Body from '../components/Body.js';

const Home = () => {

    const navigation = useNavigation();

    // DIETA
    const handleVisualizarDieta = () => {

        navigation.navigate('Dieta');

    }

    const handleAceitarDieta = () => {
        
    }

    const handleRejeitarDieta = () => {
        
    }

    // TREINO
    const handleVisualizarTreino = () => {
        navigation.navigate('Treinos');
    }

    const handleAceitarTreino = () => {
        
    }

    const handleRejeitarTreino = () => {
        
    }

    return (
        <>
            <Header>
            </Header>

            <Body>
                <View style={styles.diaSemana}>
                    {(new Date()).toLocaleDateString('pt-BR', { weekday: 'long' }).split('-')[0]}
                </View>
                <View style={styles.diaAtual}>
                    {(new Date()).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }).split('/').reverse().join('/')}
                </View>

                <View style={styles.tarefas}>
                    {/* DIETA */}
                    <View style={styles.tarefa}>
                        <View style={styles.textoTitulo}>
                            <Text style={styles.titulo}>Dieta</Text>
                            <FontAwesome name="cutlery" size={24} color="black" />
                        </View>

                        <View style={styles.botaoVisualizarContainer}>
                            <TouchableOpacity style={styles.botaoVisualizar}>
                                <Text style={styles.textoBotaoVisualizar} onPress={handleVisualizarDieta}>Visualizar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.botoesAcao}>
                            <TouchableOpacity
                                style={styles.botaoAcaoRejeitar}
                                onPress={() => handleRejeitarDieta}>
                                <FontAwesome name="close" style={styles.iconRejeitar} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.botaoAcaoAceitar}
                                onPress={() => handleAceitarDieta}>
                                <FontAwesome name="check" style={styles.iconAceitar} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* SEPARADOR */}
                    <View style={styles.separador}></View>

                    {/* TREINO */}
                    <View style={styles.tarefa}>
                        <View style={styles.textoTitulo}>
                            <Text style={styles.titulo}>Treino</Text>
                            <FontAwesome name="bicycle" size={24} color="black" />
                        </View>

                        <View style={styles.botaoVisualizarContainer}>
                            <TouchableOpacity style={styles.botaoVisualizar}>
                                <Text style={styles.textoBotaoVisualizar} onPress={handleVisualizarTreino}>Visualizar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.botoesAcao}>
                            <TouchableOpacity
                                style={styles.botaoAcaoRejeitar}
                                onPress={() => handleRejeitarTreino}>
                                <FontAwesome name="close" style={styles.iconRejeitar} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.botaoAcaoAceitar}
                                onPress={() => handleAceitarTreino}>
                                <FontAwesome name="check" style={styles.iconAceitar} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Body>

            <BottomNavigation currentBottomNavigationTabIndex={3} />
        </>
    );

};

const styles = StyleSheet.create({
    diaSemana: {
        textTransform: 'capitalize',
        fontSize: 40,
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem'
    },
    diaAtual: {
        fontSize: 28,
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.5rem'
    },
    tarefas: {
        marginTop: '2rem',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: 170,
        height: '50vh'
    },
    tarefa: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
    },
    textoTitulo: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
    },
    titulo: {
        marginRight: '1rem',
        fontSize: 28
    },
    botaoVisualizarContainer: {
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    botaoVisualizar: {
        backgroundColor: '#C84B4B',
        width: 120,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.2rem'
    },
    textoBotaoVisualizar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    botoesAcao: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'row',
        justifyContent: 'space-around'
    },
    botaoAcaoAceitar: {
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#78eb78'
    },
    iconAceitar: {
        color: '#0b340b',
        fontSize: 32
    },
    botaoAcaoRejeitar: {
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ed9393'
    },
    iconRejeitar: {
        color: '#620b0b',
        fontSize: 32
    },
    separador: {
        width: 1,
        height: 250,
        backgroundColor: 'gray'
    }
});

export default Home;