import { IRequestDataForAddCourse, IRequestDataForAddWorkout, IWorkout } from '@/interface';

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
export const patchAddWorkout = async (dataUserForWorkout: IWorkout, idWorkout: number | string) => {
  try {
    const { data } = await base.patch<IRequestDataForAddWorkout>(`/usersActiveWorkout/${idWorkout}.json`, dataUserForWorkout);
    return data;
  } catch {
    return new Error('Что-то пошло не так! Попробуйте позже!');
  }
};
