import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import { styles } from './styles/stylesResult';

import { style } from "./styles/styles";

export default function ResultScreen({ route, navigation }) {
  const { alcool, gasolina } = route.params;

  const resultado = (alcool / gasolina).toFixed(2);
  const recomendacao = resultado < 0.7 ? 'Compensa usar Álcool' : 'Compensa usar Gasolina';

  return (
    <View style={style.container}>

      <View style={[style.header, styles.view]}>
      <Image 
          source={require("./img/gas.png")}
          style={style.logo}
        />
        <Text style={styles.title}>
          {recomendacao}
        </Text>
      </View>

      <View style={style.main}>

        <View style={styles.result}>
          <Text style={styles.text}>
            Com os preços: {'\n'}
          </Text>
          <Text style={style.title2}>
            Álcool: R$ {parseFloat(alcool).toFixed(2)} {'\n'}
            Gasolina: R$ {parseFloat(gasolina).toFixed(2)} {'\n\n'}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn2}>
            <Text style={styles.btnText}>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
