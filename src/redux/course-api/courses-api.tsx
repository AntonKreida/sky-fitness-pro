import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICourse, IUserAddedCourses, IWorkout } from '@interface/';


export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DATABASE_URL,
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query<ICourse[], number>({
      query: () => 'courses.json',
    }),
    getAllAddedCourses: builder.query<IUserAddedCourses[], number>({
      // @ts-ignore later
      query: (id: string) => `usersActiveCourse/${id}.json`,
    }),
    getAllWorkouts: builder.query<IWorkout[], number>({
      query: () => 'workouts.json',
    }),
    getByCourseId: builder.query<ICourse, string>({
      query: (id: string) => `courses/${id}.json`,
    })
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetAllAddedCoursesQuery,
  useGetAllWorkoutsQuery,
  useGetByCourseIdQuery
} = coursesApi;
