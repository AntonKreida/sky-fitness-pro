export interface IAddedWorkout {
  workouts: string[];
}

export interface IAddedCourses {
  courses: IAddedWorkout[];
}


export interface IUserAddedCourses {
  users: IAddedCourses[];
}
