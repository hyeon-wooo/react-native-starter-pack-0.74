/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {RecoilRoot} from 'recoil';
import AbsoluteLoadingView from '~/components/AbsoluteLoadingView';
import MainScreen from '~/screens/Main';
import SplashScreen from '~/screens/Splash';
import { TScreenParams } from '~/types/navigation.type';

const Stack = createNativeStackNavigator<TScreenParams>();

const AppInner = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
};

const App = () => {
  return (
    <RecoilRoot>
      <AppInner />
      <AbsoluteLoadingView />
    </RecoilRoot>
  );
};

export default App;
