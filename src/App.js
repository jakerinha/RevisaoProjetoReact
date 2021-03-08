import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image } from 'react-native'
import clarice from './Assets/clarice.png'

export default function App(){

  return(
    <SafeAreaView style = {styles.Principal}>
      <Text style={styles.Titulo}> Fala Clarice! </Text>
      <Image source={clarice} style={styles.Imagem} />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({

  Principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around', //distribui uniformemente os componentes na vertical
    alignItems: 'center'
  },
  Titulo: {
    color: '#1a237e',
    fontSize: 30
  }
})