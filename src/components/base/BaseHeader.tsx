import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {iconArrowLeft} from '~/asset/image';
import {theme} from '~/lib/theme';
import {TScreenParams} from '~/lib/type/navigation.type';

interface IProps {
  title: string;
  noBack?: boolean; // default: false
  onPressBack?: () => void;
  backIcon?: () => JSX.Element;
}
const BaseHeader = (props: IProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<TScreenParams>>();

  const _onPressBack = () => {
    navigation.isFocused() && navigation.pop();
  };

  return (
    <View style={s.wrapper}>
      {!props.noBack && (
        <TouchableOpacity
          style={{
            width: theme.height.header,
            height: theme.height.header,
            ...theme.center,
          }}
          onPress={() => {
            if (props.onPressBack) return props.onPressBack();

            _onPressBack();
          }}>
          {props.backIcon ? (
            props.backIcon()
          ) : (
            <Image
              source={iconArrowLeft.src}
              style={{width: '30%', height: '30%'}}
            />
          )}
        </TouchableOpacity>
      )}

      <Text style={s.title}>{props.title}</Text>
      {!props.noBack && (
        <View
          style={{
            width: theme.height.header,
            height: theme.height.header,
          }}
        />
      )}
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: theme.height.header,
    ...theme.box.rowCenter,
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    ...theme.text.title.header,
  },
});

export default BaseHeader;
