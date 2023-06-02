import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.listItem}>Apenas Dieta</Text>
      <Text style={styles.listItem}>Apenas Treino</Text>
      <Text style={styles.listItem}>Dieta e Treino</Text>
      <Text style={styles.listItem}>Não houve marcação</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ListScreen;
