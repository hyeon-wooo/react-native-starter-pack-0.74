/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {RecoilRoot} from 'recoil';
import AbsoluteLoadingView from '~/components/AbsoluteLoadingView';

const AppInner = () => {
  return <View></View>;
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
