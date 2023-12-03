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

export interface ICourseData {
  [key: string]: ICourse;
}
