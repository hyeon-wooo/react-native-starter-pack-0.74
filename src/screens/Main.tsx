import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TScreenParams} from '~/types/navigation.type';

const MainScreen = ({
  navigation,
}: NativeStackScreenProps<TScreenParams, 'Main'>) => {
  return <View></View>;
};

const s = StyleSheet.create({});

export default MainScreen;
