import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DiasDaSemana = (props) => {
  const [dias, setDias] = useState(['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']);

  const [selectedDay, setSelectedDay] = useState(null);
  
  const handlePress = (dia) => {
    setSelectedDay(dia);
    if (dia == 'Dom'){
      props.onPress(0)
    } else if (dia == 'Seg') {
      props.onPress(1)
    } else if (dia == 'Ter') {
      props.onPress(2)
    } else if (dia == 'Qua') {
      props.onPress(3)
    } else if (dia == 'Qui') {
      props.onPress(4)
    } else if (dia == 'Sex') {
      props.onPress(5)
    } else if (dia == 'Sab') {
      props.onPress(6)
    }
  };

  useEffect(() => {
    setSelectedDay(dias[props.selectedDay]);

  }, []);


  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        {dias.map((dia, index) => (
          <TouchableOpacity
            key={index}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              margin: 5,
              backgroundColor: dia === selectedDay ? '#FF0000' : '#ccc',
              borderRadius: 5
            }}
            onPress={() => handlePress(dia)}
          >
            <Text>{dia}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiasDaSemana;