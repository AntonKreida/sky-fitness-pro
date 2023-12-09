export interface IExercise {
  name: string;
  quantity: number;
  workout: string;
}

export interface IWorkout {
  _id: string;
  course: string;
  name: string;
  video: string;
  exercises?: IExercise[];
}

export interface ICourse {
  _id: string;
  description: string;
  directions: string[];
  fitting: string[];
  nameEN: string;
  nameRU: string;
  order: number;
  workouts: string[];
}
