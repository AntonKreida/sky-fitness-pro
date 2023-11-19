import { Routes, Route } from 'react-router-dom';

import { Course } from './pages/Course/Course';
import { HomePage } from './pages/HomePage/HomePage';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { ChangeDataLogin } from './pages/ChangeData/ChangeDataLogin';
import { ChangeDataPassword } from './pages/ChangeData/ChangeDataPassword';


export const AppRouter = () => (
  <Routes>
    <Route element={ <Course /> } path="/sky-fitness-pro/course" />
    <Route index element={ <HomePage /> } path="/sky-fitness-pro" />
    <Route element={ <Login /> } path="/sky-fitness-pro/login" />
    <Route element={ <Register /> } path="/sky-fitness-pro/register" />
    <Route element={ <ChangeDataLogin /> } path="/sky-fitness-pro/change-login" />
    <Route element={ <ChangeDataPassword /> } path="/sky-fitness-pro/change-password" />
  </Routes>
);
