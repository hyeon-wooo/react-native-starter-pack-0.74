import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useRecoilValue} from 'recoil';
import {theme} from '~/lib/theme';
import {atom__loading} from '~/recoil/atom';

const AbsoluteLoadingView = () => {
  const r__loading = useRecoilValue(atom__loading);
  if (!r__loading) return null;

  return (
    <View style={s.wrapper}>
      <ActivityIndicator size="large" color={theme.color.main[0]} />
    </View>
  );
};

const s = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0000004d',
    ...theme.center,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default AbsoluteLoadingView;
