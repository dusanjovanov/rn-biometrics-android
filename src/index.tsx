import { NativeModules } from 'react-native';

type RnBiometricsAndroidType = {
  multiply(a: number, b: number): Promise<number>;
};

const { RnBiometricsAndroid } = NativeModules;

export default RnBiometricsAndroid as RnBiometricsAndroidType;
