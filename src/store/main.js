import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import todoReducer from './reducers/appDataReducers';
import {legacy_createStore as createStore} from 'redux'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)