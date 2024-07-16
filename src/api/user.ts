import {TSignInPayload, TSignUpPayload} from '~/lib/type/api.type';
import {fetchGet, fetchPost, handleFetchResult} from '.';
import {API_URL} from '~/lib/constant';

export const api_me = async (jwt: string) => {
  return fetchGet(API_URL + '/user/me', jwt);
};
export const api_signUp = async (payload: TSignUpPayload) => {
  return fetchPost(API_URL + '/user/signup', payload);
};

export const api_signIn = async (payload: TSignInPayload) => {
  return fetchPost(API_URL + '/user/signin', payload);
};
