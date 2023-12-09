import { base } from '../base';


// ADD USER IN COURSE
export const patchAddUserInCourse = async (idCourse: string, user: string) => {
  const { data } = await base.patch<string>(`/course/${idCourse}/users.json`, {
    [user]: true,
  });

  return data;
};
