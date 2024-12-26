import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles/stylesHome';
import { style } from "./styles/styles";

export default function HomeScreen({ navigation }) {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');

  const handleCalculate = () => {
    navigation.navigate('Result', { alcool, gasolina });
  };

  return (
    <View style={style.container}>
      <View style={styles.header}>
        <Image source={require("./img/logo.png")}
               style={styles.logo}
        />
        <Text style={styles.title}>Qual compensa mais?</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.title2}>Alcool (preço por litro)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={alcool}
          onChangeText={setAlcool}
        />
        <Text style={styles.title2}>Gasolina (preço por litro)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={gasolina}
          onChangeText={setGasolina}
        />
        <TouchableOpacity style={styles.btn} onPress={handleCalculate}>
          <Text style={styles.title3}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

