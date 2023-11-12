import { Routes, Route } from 'react-router-dom';

import { Course, HomePage } from '@pages/';
import { Layout } from '@/layouts/layout/layout';


export const AppRouter = () => (
  <Routes>
    <Route element={ <Layout /> } path="/sky-fitness-pro">
      <Route index element={ <HomePage /> } />
      <Route element={ <Course /> } path="/sky-fitness-pro/course" />
      <Route element={ <HomePage /> } path="sky-fitness-pro/workout" />
    </Route>
  </Routes>
);
