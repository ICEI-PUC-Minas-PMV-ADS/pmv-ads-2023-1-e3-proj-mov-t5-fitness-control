import React from 'react';
import {View,Text, StyleSheet, Button, TextInput} from 'react-native';


const Cadastro = () =>{

    return(
      <>
      <Text style={styles.titulo}> CADASTRO </Text>
    
      <TextInput
        style={styles.input}
        placeholder="Nome"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        keyboardType="string"
      />
      <Button
        title= "Cadastrar"
        color= 'red'
      /> 

      
      </>

      
    );

   

};


const styles = StyleSheet.create({
    titulo:{
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
})
export default Cadastro;