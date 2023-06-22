import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as CalendarTable from '../services/CalendarioDB.service';

class MyCalendar extends Component {
    months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    state = {
        activeDate: new Date(),
        checks: [],
    };

    componentDidMount() {
        this.getUserChecks();
    }

    _onPress = (item) => {
        this.setState((prevState) => {
            if (!item.match && item !== -1) {
                prevState.activeDate.setDate(item);
                return prevState;
            }
        });
    };

    changeMonth = (n) => {
        this.setState((prevState) => {
            const { activeDate } = prevState;
            activeDate.setMonth(activeDate.getMonth() + n);
            return { activeDate };
        });
    };

    generateMatrix() {
        const matrix = [];
        matrix[0] = this.weekDays;
        const year = this.state.activeDate.getFullYear();
        const month = this.state.activeDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        let maxDays = this.nDays[month];
        if (month === 1 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
            maxDays += 1;
        }

        let counter = 1;
        for (let row = 1; row < 7; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row === 1 && col >= firstDay) {
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    matrix[row][col] = counter++;
                }
            }
        }
        return matrix;

    }

    getUserChecks = async () => {
        const date = new Date().toISOString().split('T')[0];
        const checks = await CalendarTable.getDataCalendario(date);
        this.setState({ checks });
    };

    render() {
        const matrix = this.generateMatrix();
        const { activeDate, checks } = this.state;

        const rows = matrix.map((row, rowIndex) => {
            const rowItems = row.map((item, colIndex) => {
                return (
                    <Text
                        style={{
                            flex: 1,
                            height: 18,
                            textAlign: 'center',
                            backgroundColor: rowIndex === 0 ? '#aba9a9' : '#fff',
                            color: colIndex === 0 ? '#a00' : '#000',
                            fontWeight: item === activeDate.getDate() ? 'bold' : '',
                        }}
                        onPress={() => this._onPress(item)}
                        key={`${rowIndex}-${colIndex}`}
                    >
                        {item !== -1 ? item : ''}
                    </Text>
                );
            });
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                    key={rowIndex}
                >
                    {rowItems}
                </View>
            );
        });

        return (
            <View>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign: 'center',
                    }}
                >
                    {this.months[activeDate.getMonth()]} &nbsp;
                    {activeDate.getFullYear()}
                </Text>
                {rows}
                <View style={styles.buttonContainer}>
                    <Button title="Voltar" onPress={() => this.changeMonth(-1)} />
                    <Button title="Avançar" onPress={() => this.changeMonth(1)} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },
});

export default MyCalendar;