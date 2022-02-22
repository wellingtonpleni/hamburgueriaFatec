import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold  } 
       from '@expo-google-fonts/ubuntu'
import { Produto } from './src/screens/Produto'

export default function App(){
  const [fontsLoaded] = 
  useFonts({ Ubuntu_700Bold, Ubuntu_400Regular, Ubuntu_500Medium })
    if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
      <Produto/>
  )
}