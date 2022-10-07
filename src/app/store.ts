import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterSlice from 'features/counter/counterSlice';
import userSlice from "features/api/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [userSlice.reducerPath]: userSlice.reducer
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
