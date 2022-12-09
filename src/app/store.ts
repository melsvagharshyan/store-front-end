import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsState from './Slices/productsSlice';
import filterState from './Slices/filter-slice';


export const store = configureStore({
  reducer: {
    productsState,
    filterState
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
