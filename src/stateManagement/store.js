import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';


const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['productState'],
  // whitelist: ['productState'],
}

const persistedReducer = persistReducer(persistConfig, productReducer);



export const store = configureStore({
  reducer: {
    productState : persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat(logger)
})


export const persistor = persistStore(store);

export default store;
