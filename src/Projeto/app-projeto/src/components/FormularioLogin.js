import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  
  return (
    <>
      <Text style={styles.titulo}> FITNESS CONTROL </Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="string"
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

      <Button title="Acessar" color="red" />

      <Button title="Cadastrar" color="gray" />
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
  },
});
export default Login;
