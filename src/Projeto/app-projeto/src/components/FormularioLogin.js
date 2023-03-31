import React from 'react';
import {View,Text, StyleSheet, Button, TextInput} from 'react-native';


const Login = () =>{

    return(
      <>
      <Text style={styles.titulo}> FITNESS CONTROL </Text>
    
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="string"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="string"
      />
      <Button
        title= "Acessar"
        color= 'red'
      /> 

      <Text> Realizar Cadastro </Text>
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
export default Login;