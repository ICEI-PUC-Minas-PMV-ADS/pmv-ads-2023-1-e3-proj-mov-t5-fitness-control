import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/navigation/Main.js'

const App = () => {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Main />
            </NavigationContainer>
        </SafeAreaProvider>
    );

}

const styles = StyleSheet.create({
    
});

export default App;