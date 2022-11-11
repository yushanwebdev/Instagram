import {
  IRequestBodyObj,
  IRequestHeaderObj,
  IRequestParamObj,
} from '../../utilities/interfaces/request';
import {jsonToQueryString} from '../../utilities/lib';

const defaultHeaders = (otherHeaders?: IRequestParamObj) => {
  return {
    'Content-Type': 'application/json',
    ...otherHeaders,
  };
};

const API = {
  get: (
    endpoint: string,
    queryParam?: IRequestParamObj,
    otherHeaders?: IRequestHeaderObj,
  ) => {
    const query = queryParam ? jsonToQueryString(queryParam) : '';
    return fetch(endpoint + query, {
      method: 'GET',
      headers: defaultHeaders(otherHeaders),
    });
  },
  post: (
    endpoint: string,
    body: IRequestBodyObj,
    otherHeaders?: IRequestHeaderObj,
  ) => {
    return fetch(endpoint, {
      method: 'POST',
      headers: defaultHeaders(otherHeaders),
      body: JSON.stringify(body),
    });
  },
};

export default API;
