import React, {forwardRef, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {theme} from '~/lib/theme';

interface IProps extends TextInputProps {}

const BaseInput = forwardRef(
  (props: IProps, ref: React.ForwardedRef<TextInput>) => {
    const [focused, setFocused] = useState(props.autoFocus ?? false);

    return (
      <TextInput
        ref={ref}
        autoCapitalize="none"
        {...props}
        style={[s.input, focused && s.focused, props.style]}
        placeholderTextColor={theme.color.gray[0]}
        onFocus={e => {
          setFocused(true);
          props.onFocus && props.onFocus(e);
        }}
        onBlur={e => {
          setFocused(false);
          props.onBlur && props.onBlur(e);
        }}
      />
    );
  },
);

const s = StyleSheet.create({
  input: {
    width: '100%',
    height: theme.rem * 3,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: theme.color.borderLight,
    color: theme.color.black[0],

    fontSize: theme.rem * 0.9,
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  focused: {
    borderColor: theme.color.main[0],
  },
});

export default BaseInput;
