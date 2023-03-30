/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import Constants from 'expo-constants'

const ENV = {
  development: {
    GOOGLE_MAPS_KEY: 'AIzaSyDMKXgTik_BboalQAMEVvHdUBoPqfQ6FTc',
    IOS_CLIENT_ID: `571170442402-dsm0jfttp1u219dsjpml67kvphc94nrf.apps.googleusercontent.com`,
    ANDROID_CLIENT_ID: `571170442402-ejh01f91paols7s281s2htqe7k5f8jim.apps.googleusercontent.com`
  },
  staging: {
    GOOGLE_MAPS_KEY: 'AIzaSyDMKXgTik_BboalQAMEVvHdUBoPqfQ6FTc',
    IOS_CLIENT_ID: `571170442402-dsm0jfttp1u219dsjpml67kvphc94nrf.apps.googleusercontent.com`,
    ANDROID_CLIENT_ID: `571170442402-ejh01f91paols7s281s2htqe7k5f8jim.apps.googleusercontent.com`
  },
  production: {
    GOOGLE_MAPS_KEY: 'AIzaSyDMKXgTik_BboalQAMEVvHdUBoPqfQ6FTc',
    IOS_CLIENT_ID: `571170442402-dsm0jfttp1u219dsjpml67kvphc94nrf.apps.googleusercontent.com`,
    ANDROID_CLIENT_ID: `571170442402-ejh01f91paols7s281s2htqe7k5f8jim.apps.googleusercontent.com`
  }
}

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  // eslint-disable-next-line no-undef
  if (__DEV__) {
    return ENV.development
  } else if (env === 'production') {
    return ENV.production
  } else if (env === 'staging') {
    return ENV.staging
  } else {
    return ENV.development
  }
}

export default getEnvVars
