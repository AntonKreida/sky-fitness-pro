import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICourses } from './courses.interface';


export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://skypro-fitness-96004-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query<ICourses[], number>({
      query: () => 'courses.json',
    }),
  }),
});

export const { useGetAllCoursesQuery } = coursesApi;
