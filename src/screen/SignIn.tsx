import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TScreenParams} from '~/lib/type/navigation.type';

const SignInScreen = ({
  navigation,
}: NativeStackScreenProps<TScreenParams, 'SignIn'>) => {
  return <View></View>;
};

const s = StyleSheet.create({});

export default SignInScreen;
