import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import './login.scss';
import { loginCss } from './login-css';

const Login: React.FC = () => {
    const [senha, setSenha] = useState('');
    const [hidePass, setHidePass] = useState(true);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {/* <>
                    <Text style={styles.titulo}> FITNESS CONTROL </Text>

                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            // keyboardType="string"
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
                </> */}
            </IonContent>
        </IonPage>
    );
};

// const styles = StyleSheet.create(loginCss);

export default Login;