import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {api_me} from '~/api/user';
import BaseHeader from '~/components/base/BaseHeader';
import BaseScreen from '~/components/base/BaseScreen';
import {TScreenParams} from '~/lib/type/navigation.type';
import {atom__accessToken, atom__loading, atom__me} from '~/recoil/atom';

const MainScreen = ({
  navigation,
}: NativeStackScreenProps<TScreenParams, 'Main'>) => {
  const r__setLoading = useSetRecoilState(atom__loading);
  const r__token = useRecoilValue(atom__accessToken);
  const [r__me, r__setMe] = useRecoilState(atom__me);

  useEffect(() => {
    if (!r__token) return;

    r__setLoading(true);
    api_me(r__token)
      .then(res => {
        if (!res) return;
        if (!res.success) return Alert.alert(res.errorMessage);

        // r__setMe(res.data.user)
        r__setMe({id: 'testId'});
      })
      .finally(() => {
        r__setLoading(false);
      });
  }, []);

  return (
    <BaseScreen>
      <BaseHeader title="메인" noBack />
      <View style={{flex: 1}}></View>
    </BaseScreen>
  );
};

const s = StyleSheet.create({});

export default MainScreen;
