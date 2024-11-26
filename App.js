import React, {Component} from "react";
import { Platform, StyleSheet, View, Button, Modal } from "react-native";

import Entrar from "./src/Entrar"; 

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar(){
    this.setState({modalVisible: true});
  }
  
  sair(visible){
    this.setState({ modalVisible: visible });
  }

  render(){
    return(
      <View style={styles.container}>
        <Button title="Entrar" onPress={ this.entrar }/>

        <Modal transparent={true} animationType="fade" visible={this.state.modalVisible}>
          <View style={styles.modalView}>
            <Entrar fechar={ () => this.sair(false)}/>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDD"
  },
  modalView: {
    margin: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})