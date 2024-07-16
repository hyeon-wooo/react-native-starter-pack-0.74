import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TScreenParams} from '~/types/navigation.type';

const SplashScreen = ({
  navigation,
}: NativeStackScreenProps<TScreenParams, 'Splash'>) => {
  return <View></View>;
};

const s = StyleSheet.create({});

export default SplashScreen;
