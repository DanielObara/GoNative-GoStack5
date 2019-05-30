import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";

export default function TodoApp() {
  const [value, setValue] = useState();
  const [todo, setTodos] = useState([]);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Teste" onChangeText={text => setTodos(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
