import React, { useEffect } from 'react'
import * as ScreenOrientation from 'expo-screen-orientation'
import { NativeBaseProvider, StatusBar } from 'native-base'
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'

import { Loading } from './src/components/loading'
import { Routes } from './src/routes'
import { THEME } from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  useEffect(() => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    ).catch((err) => console.log(err))
  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  )
}
