package com.rnbiometricsandroid

import androidx.biometric.BiometricManager
import androidx.biometric.BiometricPrompt
import androidx.core.content.ContextCompat
import androidx.fragment.app.FragmentActivity
import com.facebook.react.bridge.*

class RnBiometricsAndroidModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "RnBiometricsAndroid"
    }
 @ReactMethod
    fun checkCanAuthenticate(promise: Promise) {
        val canAuthenticate = BiometricManager.from(reactApplicationContext).canAuthenticate()
        return promise.resolve(canAuthenticate)
    }

    @ReactMethod
    fun showBiometricPrompt(config: ReadableMap, promise: Promise) {
        UiThreadUtil.runOnUiThread(
                Runnable {
                    val executor = ContextCompat.getMainExecutor(reactApplicationContext)

                    val biometricPrompt = BiometricPrompt(currentActivity as FragmentActivity, executor,
                            object : BiometricPrompt.AuthenticationCallback() {
                                override fun onAuthenticationError(errorCode: Int,
                                                                   errString: CharSequence) {
                                    super.onAuthenticationError(errorCode, errString)
                                    promise.resolve(errorCode)
                                }

                                override fun onAuthenticationSucceeded(
                                        result: BiometricPrompt.AuthenticationResult) {
                                    super.onAuthenticationSucceeded(result)
                                    promise.resolve(null)
                                }

                                override fun onAuthenticationFailed() {
                                    super.onAuthenticationFailed()
                                    promise.resolve(null)
                                }
                            })

                    val promptInfo = BiometricPrompt.PromptInfo.Builder()
                            .setTitle(config.getString("title") as CharSequence)
                            .setSubtitle(config.getString("subtitle") as CharSequence)
                            .setDeviceCredentialAllowed(true)
                            .build()

                    biometricPrompt.authenticate(promptInfo)
                }
        )


    }

    
}
