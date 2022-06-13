import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userThunkReducer from './reducers/userThunkReducer';


const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['productState'],
  // whitelist: ['productState'],
}

const persistedReducer = persistReducer(persistConfig, productReducer,userThunkReducer);



export const store = configureStore({
  reducer: {
    productState : persistedReducer,
    userThunkState : userThunkReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk,
      serializableCheck: false,
      immutableCheck: false
    }).concat(logger)
})


export const persistor = persistStore(store);

export default store;
