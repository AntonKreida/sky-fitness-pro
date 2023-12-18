import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  ICourse, IExercise, IResponseCourse, IResponseWorkout, IWorkout
} from '@interface/';


export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DATABASE_URL,
  }),
  tagTypes: ['Workout', 'Course'],
  endpoints: (builder) => ({
    getAllCourses: builder.query<ICourse[], number>({
      query: () => 'courses.json',
      providesTags: ['Course'],
    }),
    getAllWorkouts: builder.query<IWorkout[], number>({
      query: () => 'workouts.json',
    }),

    getByCourseId: builder.query<ICourse, string>({
      query: (id: string) => `courses/${id}.json`,
    }),
    patchAddCourse: builder.mutation({
      query: ({
        idUser, body,
      }: { idUser: string; body: IWorkout }) => ({
        url: `usersActiveCourse/${idUser}.json`,
        method: 'PATCH',
        body,
        headers: {
          'Content-Type': 'application/json',
        }
      }),
      invalidatesTags: ['Course'],
    }),
    getAllAddedCourses: builder.query<IResponseCourse, string>({
      query: (id: string) => `usersActiveCourse/${id}.json`,
      merge: (currentCacheData, responseDate) => ({
        ...currentCacheData,
        ...responseDate,
      }),
      providesTags: ['Course'],
    }),
    getAllAddedWorkouts: builder.query<IResponseWorkout, string>({
      query: (id: string) => `usersActiveWorkout/${id}.json`,
    }),
    getWorkoutById: builder.query<IWorkout, {
      userId: string;
      workoutId: string;
    }>({
      query: ({
        userId, workoutId,
      }) => `usersActiveWorkout/${userId}/${workoutId}.json`,
      providesTags: ['Workout'],
    }),
    patchChangeWorkout: builder.mutation({
      query: ({
        idUser, idWorkout, body,
      }: { idUser: string; idWorkout: string; body: IExercise[] }) => ({
        url: `usersActiveWorkout/${idUser}/${idWorkout}.json`,
        method: 'PATCH',
        body: {
          exercises: body,
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }),
      invalidatesTags: ['Workout'],
    })
  }),
});

export const {
  useGetAllCoursesQuery,
  useGetAllAddedCoursesQuery,
  useGetAllWorkoutsQuery,
  useGetByCourseIdQuery,
  useGetAllAddedWorkoutsQuery,
  usePatchChangeWorkoutMutation,
  useGetWorkoutByIdQuery,
  usePatchAddCourseMutation,
} = coursesApi;
