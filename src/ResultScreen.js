import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';

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

const styles = StyleSheet.create({
  view:{
    flex: 0,
    margin: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"#008000"
  },
  result:{
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  btn2: {
    fontSize: 20,
    borderColor: "#FF4500",
    backgroundColor: "#363636",
    borderWidth: 2,  
    borderRadius: 8,
    padding: 10, 
  },
  btnText: {
    color: "#fff",
    fontSize: 18
  }
});
