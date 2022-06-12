import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
}

// export const rootReducer = combineReducers({
//   productState : productReducer,
// });

const persistedReducer = persistReducer(persistConfig, productReducer);



export const store = configureStore({
  reducer: {
    productState : persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
})


export const persistor = persistStore(store);

export default store;
