import React, {forwardRef} from 'react';
import {ScrollView, ScrollViewProps, StyleSheet, View} from 'react-native';

interface IProps extends ScrollViewProps {}
const BaseScrollView = forwardRef(
  (props: IProps, ref: React.ForwardedRef<ScrollView>) => {
    return (
      <ScrollView keyboardShouldPersistTaps="always" {...props} ref={ref}>
        {props.children}
      </ScrollView>
    );
  },
);

const s = StyleSheet.create({});

export default BaseScrollView;
