import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import TenantSlice from './tenant/TenantSlice.js';
import LandlordSlice from './landlord/LandlordSlice.js';
import GlobalSlice from './global/GlobalSlice.js';

const rootReducer=combineReducers({
    tenant:TenantSlice,
    landlord:LandlordSlice,
    global:GlobalSlice
})

const persistConfig={
    key:'root',
    storage,
    version:1
}

const persistedReducer=persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  })
})

export const persistor=persistStore(store);