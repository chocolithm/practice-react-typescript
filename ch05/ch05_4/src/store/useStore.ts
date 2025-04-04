import { configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
  });
  return store;
};

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
