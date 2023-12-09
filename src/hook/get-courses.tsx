import { ICourse } from '@/interface';


export const getCourses = (
  data: ICourse[] | undefined,
  allCourses: ICourse[]
) => {
  if (data) {
    const keys = Object.keys(data);
    keys.forEach((key: any) => allCourses.push(data[key]));
  }
};
