import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import userReducer from './user.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import categoryReducer from './product&Category.reducer'
// export const store = configureStore({
//   reducer: {
//     user: userReducer
//   }
// })
const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
  reducer: {
    user: persistedReducer,
    category: categoryReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);