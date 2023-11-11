import { Routes, Route } from 'react-router-dom';

import { Course } from './pages/Course/Course';
import { HomePage } from './pages/HomePage/HomePage';


export const AppRouter = () => (
  <Routes>
    <Route element={ <Course /> } path="/sky-fitness-pro/course" />
    <Route index element={ <HomePage /> } path="/sky-fitness-pro" />
  </Routes>
);
