import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {theme} from '~/lib/theme';

interface IProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}
const BaseButton = (props: IProps) => {
  return (
    <TouchableOpacity
      style={[s.btn, props.style]}
      activeOpacity={0.9}
      onPress={props.onPress}>
      <Text style={[s.txt]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 7,
    backgroundColor: theme.color.main[0],
    ...theme.center,
  },
  txt: {
    ...theme.makeFont(theme.rem * 1.1, '500', '#f5f5f5'),
  },
});

export default BaseButton;
