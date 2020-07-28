import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import RnLocalAuth, { CheckCanAuthenticateResult } from 'rn-biometrics-android';

export default function App() {
  const [resCanAuth, setResCanAuth] = useState('');
  const [resAuth, setResAuth] = useState('');

  return (
    <View style={styles.container}>
      <Button
        title="Check can authenticate"
        onPress={async () => {
          const res = await RnLocalAuth.checkCanAuthenticate();
          if (res === CheckCanAuthenticateResult.BIOMETRIC_SUCCESS) {
            setResCanAuth('CAN AUTHENTICATE');
          } else {
            setResCanAuth('CANNOT AUTHENTICATE');
          }
        }}
      />
      <Text>{resCanAuth}</Text>
      <Button
        title="Show prompt"
        onPress={async () => {
          const res = await RnLocalAuth.showBiometricPrompt({
            title: 'Authentication required',
            subtitle: 'Log in using fingerprint',
          });
          if (res === null) {
            setResAuth('SUCCESS');
          } else {
            setResAuth('ERROR');
          }
        }}
      />
      <Text>{resAuth}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
