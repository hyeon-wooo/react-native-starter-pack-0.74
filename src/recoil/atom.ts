import {atom} from 'recoil';
import {TMe} from '../types/user.type';

export const atom__loading = atom({key: 'loading', default: false});
export const atom__me = atom<TMe | null>({key: 'me', default: null});
