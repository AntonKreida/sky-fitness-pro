import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICourse, IWorkout } from '@interface/';


export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://skypro-fitness-96004-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query<ICourse[], number>({
      query: () => 'courses.json',
    }),
    getAllWorkouts: builder.query<IWorkout[], number>({
      query: () => 'workouts.json',
    }),
    getByCourseId: builder.query<ICourse, string>({
      query: (id) => `courses/${id}.json`,
    })
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetAllWorkoutsQuery,
  useGetByCourseIdQuery
} = coursesApi;
