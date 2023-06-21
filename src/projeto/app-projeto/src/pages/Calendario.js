import React from 'react';
import { View } from 'react-native';

import BottomNavigation from '../components/BottomNavigation.js';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Calendar from '../components/Calendar.js';
import ListScreen from '../components/ListScreen.js';


const Calendario = () => {

    return (
        <View style={{margin: 20}}>
            <Header>
            </Header>

            <Body>
                <Calendar />
                <ListScreen />
            </Body>

            <BottomNavigation currentBottomNavigationTabIndex={4} />

        </View>
    );
};

export default Calendario;