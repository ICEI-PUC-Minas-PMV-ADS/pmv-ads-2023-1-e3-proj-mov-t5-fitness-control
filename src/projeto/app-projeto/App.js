import React from 'react';
import { View, StyleSheet } from 'react-native';

import Cadastro from './src/components/FormularioCadastro.js'

const App = () => {
    return (
        <View style={styles.container}>
            <Cadastro />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white'
    }

});

export default App;