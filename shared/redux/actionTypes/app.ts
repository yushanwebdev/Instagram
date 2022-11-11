export enum AppActionType {
  SPLASH_LAUNCHED = 'SPLASH_LAUNCHED',
}

interface IActionSplashLaunch {
  type: AppActionType.SPLASH_LAUNCHED;
}

export type TAppAction = IActionSplashLaunch;

export interface IAppState {
  isSplashLaunched: boolean;
}
