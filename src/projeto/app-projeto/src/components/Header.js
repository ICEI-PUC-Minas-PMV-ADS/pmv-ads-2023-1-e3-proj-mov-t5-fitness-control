import React from 'react';
import { Appbar, Text } from 'react-native-paper';
import { StatusBar } from 'react-native';

const Header = ({ title }) => {

    return (

        <Appbar.Header style={styles.header}>
            <Appbar.Content title="Fitness Control" titleStyle={styles.title} />
        </Appbar.Header>


    );

};

const styles = {
    header: {
      backgroundColor: '#000000' // 
    },
    title:{
        color: '#ffffff',
        alignSelf: 'center', // centralizar o título

    }
  };
export default Header;