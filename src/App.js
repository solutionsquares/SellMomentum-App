import 'react-native-gesture-handler'
import React,{useEffect} from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { persistor, store } from './stores/index'
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AlertNotificationRoot>
          <MainNavigation />
        </AlertNotificationRoot>
      </PersistGate>
    </Provider>
  )
}

export default App
