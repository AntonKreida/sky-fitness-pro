import { configureStore } from '@reduxjs/toolkit';

import { coursesApi } from '../course-api/courses-api';
import userReducer from '../user-api/userSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    [coursesApi.reducerPath]: coursesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    coursesApi.middleware
  ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
