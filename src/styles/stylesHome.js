import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header:{
      flex: 1,
      justifyContent: "center",
      alignItems:"center"
    },
    logo:{
      marginBottom: 20
    },
    main:{
      flex:1
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:"#fff"
    },
    title2:{
      color: "#fff",
      fontSize: 18,
      margin: 14
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      width: '100%',
      marginBottom: 15,
      paddingHorizontal: 10,
      backgroundColor: "#fff"
    },
    btn:{
      backgroundColor: "#FF4500",
      padding: 10,
      borderRadius: 8,
    },
    title3: {
      alignSelf: "center",
      color: "#fff",
      fontSize: 18
    }
  });