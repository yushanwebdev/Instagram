import {IUserSignIn} from '../utilities/interfaces/user';
import API from './core/api';

export const AuthService = {
  signIn: async (baseURL: string, params: IUserSignIn) => {
    return API.post(`${baseURL}/auth/token/login/`, params).then(res =>
      res.json(),
    );
  },
};
