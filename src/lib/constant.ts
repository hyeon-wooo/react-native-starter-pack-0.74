import {Platform} from 'react-native';

export const API_URL = '';

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

/** 스토리지에 접근할 때 사용할 키들 */
export const STORAGE_KEY = {
  T_ACCESS: 'accessToken',
};
