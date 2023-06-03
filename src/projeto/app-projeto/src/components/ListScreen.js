import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listItemContainer}>
        <View style={[styles.square, { backgroundColor: '#bdecb6' }]} />
        <Text style={styles.listItem}>Apenas Dieta</Text>
      </View>

      <View style={styles.listItemContainer}>
        <View style={[styles.square, { backgroundColor: '#add8e6' }]} />
        <Text style={styles.listItem}>Apenas Treino</Text>
      </View>

      <View style={styles.listItemContainer}>
        <View style={[styles.square, { backgroundColor: 'pink' }]} />
        <Text style={styles.listItem}>Dieta e Treino</Text>
      </View>

      <View style={styles.listItemContainer}>
        <View style={[styles.square, { backgroundColor: '#d3d3d3' }]} />
        <Text style={styles.listItem}>Não houve marcação</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  listItem: {
    fontSize: 16,
    marginRight: 8,
  },
  square: {
    width: 20,
    height: 20,
    padding: 18,
    margin: 8,
  },
});

export default ListScreen;