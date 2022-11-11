import {AppActionType, IAppState, TAppAction} from '../actionTypes/app';

const initialState: IAppState = {
  isSplashLaunched: false,
};

export const appReducer = (
  state: IAppState = initialState,
  action: TAppAction,
): IAppState => {
  switch (action.type) {
    case AppActionType.SPLASH_LAUNCHED:
      return {
        ...state,
        isSplashLaunched: true,
      };
    default:
      return state;
  }
};
