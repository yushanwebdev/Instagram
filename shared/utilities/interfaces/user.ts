import {IRequestBodyObj} from './request';

export interface IUserSignIn extends IRequestBodyObj {
  email: string;
  password: string;
  merchant?: string;
}
