import { Routes, Route } from 'react-router-dom';

import { Layout } from '@layouts/';
import { Course, HomePage, Workout } from '@pages/';


export const AppRouter = () => (
  <Routes>
    <Route element={ <Layout /> } path="/sky-fitness-pro">
      <Route index element={ <HomePage /> } />
      <Route element={ <Course /> } path="course" />
      <Route element={ <Workout /> } path="workout" />
    </Route>
  </Routes>
);
