import react, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';



const BottomNavigation = (props) => {

    const navigation = useNavigation();

    const bottomNavigationTabIndex = props.currentBottomNavigationTabIndex;

    const handleBottomNavigationPress = (destination, newTabIndex) => {
        navigation.navigate(destination);
    };

    return (

        <View style={styles.bottomNavigationContainer}>


            <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress('Dieta', 1)}>

                <Icon name="cutlery" style={(bottomNavigationTabIndex == 1) ? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>
                
            </Pressable>

            <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress('Treinos', 2)}>
                
                <Icon name="bicycle" style={(bottomNavigationTabIndex == 2) ? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>
                
            </Pressable>


            <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress("Home", 3)}>

                <Icon name="home" style={(bottomNavigationTabIndex == 3) ? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>
                

            </Pressable>

            <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress('Calendario', 4)}>

                <Icon name="calendar" style={(bottomNavigationTabIndex == 4) ? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>

                
            </Pressable>

            <Pressable style={styles.navigationButton} onPress={() => handleBottomNavigationPress("Usuario", 5)}>

                <Icon name="user" style={(bottomNavigationTabIndex == 5) ? styles.selectedNavigationButtonIcon : styles.navigationButtonIcon} size={21} ></Icon>
                

            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomNavigationContainer: {
        width: '100%',
        height: 64,
        backgroundColor: '#f06464',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    navigationButton: {
        alignItems: 'center',
        margin: 2,
    },
    navigationButtonIcon: {
        alignItems: 'center',
        color: 'black',
        margin: 6,
        marginBottom: 0,
        padding: 6,
        paddingLeft: 21,
        paddingRight: 21,
        borderRadius: 24
    },
    selectedNavigationButtonIcon: {
        alignItems: 'center',
        color: 'black',
        margin: 6,
        marginBottom: 0,
        padding: 6,
        paddingLeft: 21,
        paddingRight: 21,
        backgroundColor: '#f69f9f',
        borderRadius: 24
    }
});

export default BottomNavigation;