import React from 'react';
import BottomNavigation from '../components/BottomNavigation.js';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import { Text } from 'react-native-paper';



const Usuario = () => {

    return (
        <>
            <Header>
            </Header>

            <Body>
                <Text>TReste</Text>
            </Body>

            <BottomNavigation currentBottomNavigationTabIndex={5} />

        </>
    );

};

export default Usuario;