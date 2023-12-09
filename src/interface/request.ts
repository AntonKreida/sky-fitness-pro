type TCourseID = number | string;

export interface IRequestDataForAddCourse {
  [keyof: TCourseID]: {
    workouts: string[];
  };
}
