import { IRequestDataForAddCourse } from '@/interface';

import { base } from '../base';

// ADD COURSE
export const patchAddCourse = async (dataUserForCourse: IRequestDataForAddCourse, idUser: number | string) => {
  try {
    const { data} = await base.patch<IRequestDataForAddCourse>(`/usersActiveCourse/${idUser}.json`, dataUserForCourse);
    return data;
  } catch {
    return new Error('Что-то пошло не так! Попробуйте позже!');
  }
};
