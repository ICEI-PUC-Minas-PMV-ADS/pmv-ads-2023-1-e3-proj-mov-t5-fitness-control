import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

import BottomNavigation from '../components/BottomNavigation.js';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Container from '../components/Container.js';

const Home = () => {

    return (
        <>
            <Header>
            </Header>

            <Body>
                <View></View>
            </Body>

            <BottomNavigation currentBottomNavigationTabIndex={3} />
        </>
    );

};

export default Home;