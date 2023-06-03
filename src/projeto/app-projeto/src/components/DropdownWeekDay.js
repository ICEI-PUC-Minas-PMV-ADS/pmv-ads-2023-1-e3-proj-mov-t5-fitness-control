import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DropdownList = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const diasDaSemana = [
    { value: 0, label: 'Domingo' },
    { value: 1, label: 'Segunda-feira' },
    { value: 2, label: 'Terça-feira' },
    { value: 3, label: 'Quarta-feira' },
    { value: 4, label: 'Quinta-feira' },
    { value: 5, label: 'Sexta-feira' },
    { value: 6, label: 'Sábado' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectDay = (dia) => {
    setSelectedDay(dia);
    setIsOpen(false);
    props.onChange(dia);
  };

  useEffect(() => {

    setSelectedDay(diasDaSemana[props.diaSemanaSelecionada]);

  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={styles.dropdownHeaderText}>
          {selectedDay ? selectedDay.label : 'Selecione um dia'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownList}>
          {diasDaSemana.map((dia, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownListItem}
              onPress={() => selectDay(dia)}
            >
              <Text style={styles.dropdownListItemText}>{dia.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    position: 'relative',
  },
  dropdownHeader: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  dropdownHeaderText: {
    fontSize: 16,
  },
  dropdownList: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  dropdownListItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownListItemText: {
    fontSize: 16,
  },
});

export default DropdownList;
