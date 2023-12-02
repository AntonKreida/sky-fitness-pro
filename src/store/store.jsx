import { configureStore } from '@reduxjs/toolkit';

import { coursesApi } from './course-api/coursesApi';


export const store = configureStore({
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    coursesApi.middleware
  ),
});
