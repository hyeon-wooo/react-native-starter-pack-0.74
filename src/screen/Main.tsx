import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import BaseHeader from '~/components/base/BaseHeader';
import BaseScreen from '~/components/base/BaseScreen';
import {TScreenParams} from '~/lib/type/navigation.type';

const MainScreen = ({
  navigation,
}: NativeStackScreenProps<TScreenParams, 'Main'>) => {
  return (
    <BaseScreen>
      <BaseHeader title="메인" noBack />
      <View style={{flex: 1}}></View>
    </BaseScreen>
  );
};

const s = StyleSheet.create({});

export default MainScreen;
