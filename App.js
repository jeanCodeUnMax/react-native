import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const alertText = () => {
    alert(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text style={styles.block}>
        Lancer une alerte avec le texte ci-dessous 👇
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="texte à afficher"
        onChangeText={setText}
        defaultValue={text}
      />
      <Button title="Alerte !" onPress={alertText} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  textInput: {
    margin: 15,
    padding: 7,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
  },
});
