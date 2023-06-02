import * as React from 'react'
import * as RN from 'react-native'

class MyCalendar extends React.Component {
    months = [
        'Janeiro',
        'Fevereiro ',
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
    ]

    weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    state = {
        activeDate: new Date(),
    }

    _onPress = (item) => {
        this.setState(() => {
            if (!item.match && item != -1) {
                this.state.activeDate.setDate(item)
                return this.state
            }
        })
    }

    changeMonth = (n) => {
        this.setState(() => {
            this.state.activeDate.setMonth(this.state.activeDate.getMonth() + n)
            return this.state
        })
    }

    generateMatrix() {
        let matrix = []
        matrix[0] = this.weekDays
        let year = this.state.activeDate.getFullYear()
        let month = this.state.activeDate.getMonth()
        let firstDay = new Date(year, month, 1).getDay()

        let maxDays = this.nDays[month]
        if (month == 1 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) {
            maxDays += 1
        }

        let counter = 1
        for (let row = 1; row < 7; row++) {
            matrix[row] = []
            for (let col = 0; col < 7; col++) {
                matrix[row][col] = -1
                if (row == 1 && col >= firstDay) {
                    // Fill in rows only after the first day of the month
                    matrix[row][col] = counter++
                } else if (row > 1 && counter <= maxDays) {
                    // Fill in rows only if the counter's not greater than
                    // the number of days in the month
                    matrix[row][col] = counter++
                }
            }
        }
        return matrix
    }

    render() {
        let matrix = this.generateMatrix()
        let rows = []
        rows = matrix.map((row, rowIndex) => {
            let rowItems = row.map((item, colIndex) => {
                return (
                    <RN.Text
                        style={{
                            flex: 1,
                            height: 18,
                            textAlign: 'center',
                            backgroundColor: rowIndex == 0 ? '#aba9a9' : '#fff',
                            color: colIndex == 0 ? '#a00' : '#000',
                            fontWeight: item == this.state.activeDate.getDate() ? 'bold' : '',
                        }}
                        onPress={() => this._onPress(item)}>
                        {item != -1 ? item : ''}
                    </RN.Text>
                )
            })
            return (
                <RN.View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                    {rowItems}
                </RN.View>
            )
        })
        return (
            <RN.View>
                <RN.Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign: 'center',
                    }}>
                    {this.months[this.state.activeDate.getMonth()]} &nbsp;
                    {this.state.activeDate.getFullYear()}
                </RN.Text>
                {rows}
                <RN.Button title="Voltar" onPress={() => this.changeMonth(-1)} />
                <RN.Button title="Avançar" onPress={() => this.changeMonth(+1)} />
            </RN.View>
        )
    }
}
// Export for now to get rid of error and see preview:
export default MyCalendar
