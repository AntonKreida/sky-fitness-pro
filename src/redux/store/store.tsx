import { configureStore } from '@reduxjs/toolkit';

import { coursesApi } from '../course-api/courses-api';
import { userSlice } from '../user-api';


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    coursesApi.middleware
  ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
