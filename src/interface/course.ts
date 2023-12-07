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
export interface IExercise {
  name: string;
  quantity: number;
  workout: string;
}
export interface IWorkout {
  _id: string;
  name: string;
  video: string;
  exercises?: IExercise[];
}
