import React, { useState } from "react"; //UseState é um React Hook
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator
} from "react-native";
import clarice from "./assets/clarice.png";
import { FontAwesome } from "@expo/vector-icons";
import * as Speech from "expo-speech";

export default function App() {

  const [falando, setFalando] = useState(false)

  let frases = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  ];

  const iniciaFala = () => {
    setFalando(true)
  }

  const finalizaFala = () => {
    setFalando(false)
  }

  function falar() {
    let frase = frases[parseInt(Math.random() * frases.length)];
    Speech.speak(frase, {
      language: "en",
      onStart: iniciaFala,
      onDone: finalizaFala
    });
  }
  function parar() {
    Speech.stop();
  }
  return (
    <SafeAreaView style={styles.Principal}>
      <Text style={styles.Titulo}>
        <FontAwesome name="comment-o" size={50} />
        Fala Clarice!
      </Text>
      <Text></Text>
      <Image source={clarice} style={styles.Imagem} />

      {falando && <ActivityIndicator size="large" color="#00ff00" />}

      <FontAwesome.Button
        name="volume-up"
        backgroundColor="#0275d8"
        onPress={falar}
        style={styles.Botao}
      >
        Ouvir a frase
      </FontAwesome.Button>

      <FontAwesome.Button
        name="stop-circle"
        backgroundColor={!falando ? "cccccc" : "#d9534f"}
        onPress={parar}
        disabled={!falando}
        style={styles.Botao}
      >
        Parar
      </FontAwesome.Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Principal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around", //distribui uniformemente os componentes na vertical
    alignItems: "center"
  },
  Titulo: {
    color: "#1a237e",
    fontSize: 30
  },
  Imagem: {
    height: 400,
    width: "100%",
    resizeMode: "center"
  },
  Botao: {
    width: 150,
    height: 30
  }
});
