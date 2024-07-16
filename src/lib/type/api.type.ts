export type TFetchRes<T = any> = Promise<IFetchSuccess<T> | IFetchError>;

export interface IFetchSuccess<T = any> {
  success: true;
  data: T;
}
export interface IFetchError {
  success: false;
  errorMessage: string;
  statusCode: number;
}

export type TSignUpPayload = {
  email: string;
  password: string;
  nickname: string;
};

export type TSignInPayload = Pick<TSignUpPayload, 'email' | 'password'>;
