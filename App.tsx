/* eslint-disable camelcase */
import 'react-native-gesture-handler'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton'

import { Router } from '~/routes/router'
const App: React.FC = () => {
  const [fonstLoaded] = useFonts({
    Anton_400Regular
  })

  if (!fonstLoaded) {
    return <AppLoading />
  }

  return <Router />
}

export default App
