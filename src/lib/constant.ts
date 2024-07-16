import {Platform} from 'react-native';
import {getUniqueIdSync, getVersion} from 'react-native-device-info';

export const API_URL = 'http://127.0.0.1:3000';

export const DEVICE_ID = getUniqueIdSync();
export const CURRENT_VERSION = getVersion();

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

/** 스토리지에 접근할 때 사용할 키들 */
export const STORAGE_KEY = {
  T_ACCESS: 'accessToken',
};
