type TCourseID = number | string;
type TWorkoutID = string;

interface Exercises {
  name: string;
  quantity?: number;
  myRepeat?: number;
}

export interface IRequestDataForAddCourse {
  [keyof: TCourseID]: {
    workouts: string[];
  };
}

export interface IRequestDataForAddWorkout {
  [keyof: TWorkoutID]: {
    exercises: Exercises[];
  };
}
