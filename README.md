# rn-biometrics-android

Biometrics for React Native Android (Fingerprint and Screen lock as alternative)

## Installation

```sh
npm install rn-biometrics-android
```

## Usage

```js
import RnBiometricsAndroid from 'rn-biometrics-android';

// check if the device is capable

const result = await RnBiometricsAndroid.checkCanAuthenticate();

// show prompt

const promptResult = await RnBiometricsAndroid.showBiometricPrompt({
  title: 'Login required',
  subtitle: 'Log in with fingerprint',
});
```

## API

checkCanAuthenticate = () => Promise<CheckCanAuthenticateResult\>

showBiometricPrompt = (config: {title: string, subtitle: string}) => Promise<AuthError | null>

returns either an error or null if successful

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
