import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Tipos de Redux para usar en toda la app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
