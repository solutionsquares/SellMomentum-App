import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores/index'
import {AlertNotificationRoot } from 'react-native-alert-notification';

const App = () => {
  return (
    <Provider store={store}>
      <AlertNotificationRoot>
      <MainNavigation />
      </AlertNotificationRoot>
    </Provider>
  )
}

export default App
