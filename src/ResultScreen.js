import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { alcool, gasolina } = route.params;

  const resultado = (alcool / gasolina).toFixed(2);
  const recomendacao = resultado < 0.7 ? 'Compensa usar Álcool' : 'Compensa usar Gasolina';

  return (
    <View style={styles.container}>
      <Text style={styles.result}>
        Com os preços: {'\n'}
        Álcool: R$ {parseFloat(alcool).toFixed(2)} {'\n'}
        Gasolina: R$ {parseFloat(gasolina).toFixed(2)} {'\n\n'}
        {recomendacao}
      </Text>
      <Button title="Calcular Novamente" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});
