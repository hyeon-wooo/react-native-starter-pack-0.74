import {Buffer} from 'buffer';
import {CURRENT_VERSION, DEVICE_ID} from '~/lib/constant';
import {IFetchError, IFetchSuccess, TFetchRes} from '~/lib/type/api.type';

// launch id를 헤더에 항상 삽입
const launch = `${DEVICE_ID}/${new Date().toISOString()}/${CURRENT_VERSION}`;
const launchId = Buffer.from(launch, 'utf8').toString('base64');

const authHeader = (jwt: string) => ({Authorization: `Bearer ${jwt}`});

const apiVersion = '2024-07-16';

export const fetchGet = async <TResData = any>(
  url: string,
  jwt?: string,
): Promise<TFetchRes<TResData>> => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Version': apiVersion,
      'X-Launch-Id': launchId,
      ...(jwt ? authHeader(jwt) : {}),
    },
  })
    .then(res => res.json())
    .then(handleFetchResult);

  return res;
};
export const fetchPost = async <TResData = any, TPayload = Record<string, any>>(
  url: string,
  payload: TPayload,
  jwt?: string,
): Promise<TFetchRes<TResData>> => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'X-Api-Version': apiVersion,
      'X-Launch-Id': launchId,
      'Content-Type': 'application/json',
      ...(jwt ? authHeader(jwt) : {}),
    },
  })
    .then(res => res.json())
    .then(handleFetchResult);

  return res;
};
export const fetchPut = async <TResData = any, TPayload = Record<string, any>>(
  url: string,
  payload: TPayload,
  jwt?: string,
): Promise<TFetchRes<TResData>> => {
  const res = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'X-Api-Version': apiVersion,
      'X-Launch-Id': launchId,
      'Content-Type': 'application/json',
      ...(jwt ? authHeader(jwt) : {}),
    },
  })
    .then(res => res.json())
    .then(handleFetchResult);

  return res;
};
export const fetchDelete = async <
  TResData = any,
  TPayload = Record<string, any>,
>(
  url: string,
  payload?: TPayload,
  jwt?: string,
): Promise<TFetchRes<TResData>> => {
  const res = await fetch(url, {
    method: 'DELETE',
    body: !!payload ? JSON.stringify(payload) : undefined,
    headers: {
      'X-Api-Version': apiVersion,
      'X-Launch-Id': launchId,
      'Content-Type': 'application/json',
      ...(jwt ? authHeader(jwt) : {}),
    },
  })
    .then(res => res.json())
    .then(handleFetchResult);

  return res;
};

export const handleFetchResult = (res: any) => {
  if (res.statusCode && ![200, 201].includes(res.statusCode)) {
    // 서버에서 throw exception한 경우
    return {
      success: false,
      errorMessage: res.message,
    } as IFetchError;
  } else
    return {success: true, data: res, status: res.statusCode} as IFetchSuccess;
};
