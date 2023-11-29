import axios from 'axios';


export const base = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const baseCourses = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/courses.json`
});

export const baseWorkouts = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/workouts.json`
});
