import React from 'react';
import { Appbar, Text } from 'react-native-paper';

const Header = ({ title }) => {

    return (

        <Appbar.Header>
            <Appbar.Content title="Title" />
        </Appbar.Header>


    );

};

export default Header;