import { NativeModules } from 'react-native';

type RnBiometricsAndroidType = {
  checkCanAuthenticate: () => Promise<CheckCanAuthenticateResult>;
  showBiometricPrompt: (config: {
    title: string;
    subtitle: string;
  }) => Promise<AuthError | null>;
};

export enum CheckCanAuthenticateResult {
  BIOMETRIC_SUCCESS = 0,
  BIOMETRIC_ERROR_HW_UNAVAILABLE = 1,
  BIOMETRIC_ERROR_NONE_ENROLLED = 11,
  BIOMETRIC_ERROR_NO_HARDWARE = 12,
}

export enum AuthError {
  ERROR_CANCELED = 5,
  ERROR_HW_NOT_PRESENT = 12,
  ERROR_HW_UNAVAILABLE = 1,
  ERROR_LOCKOUT = 7,
  ERROR_LOCKOUT_PERMANENT = 9,
  ERROR_NEGATIVE_BUTTON = 13,
  ERROR_NO_BIOMETRICS = 11,
  ERROR_NO_DEVICE_CREDENTIAL = 14,
  ERROR_NO_SPACE = 4,
  ERROR_TIMEOUT = 3,
  ERROR_UNABLE_TO_PROCESS = 2,
  ERROR_USER_CANCELED = 10,
  ERROR_VENDOR = 8,
}

const { RnBiometricsAndroid } = NativeModules;

export default RnBiometricsAndroid as RnBiometricsAndroidType;
