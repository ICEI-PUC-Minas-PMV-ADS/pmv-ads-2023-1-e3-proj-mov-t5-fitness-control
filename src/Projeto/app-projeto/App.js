import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

import Cadastro from './src/components/FormularioCadastro.Js'

const App = () => {
  return (
     <View style ={styles.container}>
        <Cadastro/>
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