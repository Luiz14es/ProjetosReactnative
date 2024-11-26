import React, {Component} from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

export default class App extends Component{

  render(){
    return(
          <View style={styles.modalBackGroundColor}>
            <Text style={styles.text}>Seja Bem-vindo!</Text>
            <Button title="Fechar" onPress={ this.props.fechar}/>
          </View>
    )
  }
}

const styles = StyleSheet.create({
  modalBackGroundColor: {
    backgroundColor: "#292929",
    width: "100%",
    height: 350
  },
  text: {
    color: "#fff",
    fontSize: 28,
    padding: 15,
    textAlign: "center"
  }
})