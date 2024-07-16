import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}
const BaseScreen = ({children}: IProps) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

const s = StyleSheet.create({});

export default BaseScreen;
