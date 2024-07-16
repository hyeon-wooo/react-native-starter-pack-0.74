import {Platform} from 'react-native';
import deviceInfoModule from 'react-native-device-info';

/** 기기의 모델, OS종류 및 버전 */
export const getMyDeviceInfo = () => {
  const deviceInfo = {
    model: deviceInfoModule.getModel(),
    osVersion: deviceInfoModule.getSystemVersion(),
    platform: Platform.OS === 'android' ? 'a' : 'i',
  };

  return deviceInfo;
};

export const printFormattedDate = (
  date: Date | null,
  options?: {seperator?: string},
) => {
  if (!date) return '';

  const seperator = options?.seperator ?? '-';

  const y = date.getFullYear();
  const M = (date.getMonth() + 1 + '').padStart(2, '0');
  const d = (date.getDate() + '').padStart(2, '0');
  return `${y}${seperator}${M}${seperator}${d}`;
};

export const printFormattedTime = (date: Date | null) => {
  if (!date) return '';

  const h = (date.getHours() + '').padStart(2, '0');
  const m = (date.getMinutes() + '').padStart(2, '0');
  return `${h}:${m}`;
};

/**
 *
 * @param origin amount (ex: 12300)
 * @returns string of amount with comma (ex: "12,300")
 */
export const insertComma = (origin: number) => {
  let isPlus = true;
  if (origin < 0) {
    isPlus = false;
  }
  const strMoney = Math.abs(origin).toString();
  const firstPartLength = strMoney.length % 3;
  const firstPart = strMoney.slice(0, firstPartLength);
  const rest = strMoney.slice(firstPartLength);

  if (!rest) return firstPart;

  let restPart = '';
  let cnt = 0;
  for (let i = 0; i < rest.length; i++) {
    restPart += rest[i];
    if (++cnt === 3) {
      cnt = 0;
      restPart += ',';
    }
  }
  restPart = restPart.substring(0, restPart.length - 1);
  const result = firstPart ? firstPart + ',' + restPart : restPart;
  return isPlus ? result : '-' + result;
};
