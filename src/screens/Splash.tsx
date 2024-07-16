import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {STORAGE_KEY} from '~/lib/constant';
import {atom__accessToken} from '~/recoil/atom';
import {TScreenParams} from '~/types/navigation.type';

const SplashScreen = ({
  navigation,
}: NativeStackScreenProps<TScreenParams, 'Splash'>) => {
  const r__setToken = useSetRecoilState(atom__accessToken);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    AsyncStorage.getItem(STORAGE_KEY.T_ACCESS)
      .then(t => {
        if (!t) {
          throw new Error('no token');
          return;
        }

        r__setToken(t);

        setTimeout(() => {
          navigation.reset({routes: [{name: 'Main'}]});
        }, 1000);
      })
      .catch(e => {
        switch (e.message) {
          case 'no token':
            setTimeout(() => {
              navigation.reset({routes: [{name: 'SignIn'}]});
            }, 1000);
            break;
        }
      });
  };

  return <View style={{flex: 1, backgroundColor: '#fff'}}></View>;
};

const s = StyleSheet.create({});

export default SplashScreen;
