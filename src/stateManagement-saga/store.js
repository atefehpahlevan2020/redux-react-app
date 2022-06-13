import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, productReducer);



export const store = configureStore({
  reducer: {
    commentState : persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      thunk: false
    }),
    sagaMiddleware]
})


export const persistor = persistStore(store);
export default store;

sagaMiddleware.run(mySaga);
