import {
  IRequestDataForAddCourse, IRequestDataForAddWorkout, IWorkout, IExercise
} from '@/interface';

import { base } from '../base';

// ADD COURSE
export const patchAddCourse = async (dataUserForCourse: IRequestDataForAddCourse, idUser: number | string) => {
  try {
    const { data } = await base.patch<IRequestDataForAddCourse>(`/usersActiveCourse/${idUser}.json`, dataUserForCourse);

    return data;
  } catch {
    return new Error('Что-то пошло не так! Попробуйте позже!');
  }
};
// ADD WORKOUT
export const patchAddWorkout = async (
  dataUserForWorkout: IWorkout[],
  idUser: number | string
) => {
  try {
    const { data } = await base.patch<IRequestDataForAddWorkout>(`/usersActiveWorkout/${idUser}.json`, dataUserForWorkout);

    return data;
  } catch {
    return new Error('Что-то пошло не так! Попробуйте позже!');
  }
};

// CHANGE WORKOUT
export const patchChangeWorkout = async (
  dataUserForWorkout: IExercise[],
  idUser: number | string,
  pageIdWorkout: number | string
) => {
  try {
    const { data } = await base.patch<IRequestDataForAddWorkout>(`/usersActiveWorkout/${idUser}/${pageIdWorkout}.json`, {
      exercises: dataUserForWorkout,
    });

    return data;
  } catch {
    return new Error('Что-то пошло не так! Попробуйте позже!');
  }
};
