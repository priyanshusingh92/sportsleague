import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import scheduleReducer from './slices/schedule';
import authReducer from './slices/auth';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['settings'],
};

const schedulePersistConfig = {
  key: 'schedule',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['scheduleData'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['authData'],
};

const rootReducer = combineReducers({
  schedule: persistReducer(schedulePersistConfig, scheduleReducer),
  auth: persistReducer(authPersistConfig, authReducer),
});

export { rootPersistConfig, rootReducer };
