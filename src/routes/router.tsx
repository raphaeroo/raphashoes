import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'

import { DetailScreen, HomeScreen } from '~/screens'

const { Navigator, Screen } = createStackNavigator()

export const Router = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#000" translucent />
      <Navigator>
        <Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Screen name="DetailScreen" component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
