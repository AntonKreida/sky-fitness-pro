import { Routes, Route } from 'react-router-dom';

import { Course } from './pages/Course/Course';
import { HomePage } from './pages/HomePage/HomePage';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Profile } from './pages/Profile/Profile';


export const AppRouter = () => (
  <Routes>
    <Route element={ <Course /> } path="/sky-fitness-pro/course" />
    <Route index element={ <HomePage /> } path="/sky-fitness-pro" />
    <Route element={ <Login /> } path="/sky-fitness-pro/login" />
    <Route element={ <Register /> } path="/sky-fitness-pro/register" />
    <Route element={ <Profile /> } path="/sky-fitness-pro/profile" />
  </Routes>
);
