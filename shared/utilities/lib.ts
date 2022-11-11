import {IRequestBodyObj} from './interfaces/request';

export const jsonToQueryString = (params: IRequestBodyObj) => {
  const keys = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  return `?${keys}`;
};
