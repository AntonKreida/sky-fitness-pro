import { Routes, Route } from 'react-router-dom';

import { Layout } from '@layouts/';
import {
  Course,
  HomePage,
  Login,
  Register,
  ChangeDataLogin,
  ChangeDataPassword,
  Profile,
  Workout
} from '@pages/';


export const AppRouter = () => (
  <Routes>
    <Route element={ <Course /> } path="/sky-fitness-pro/course/:id" />
    <Route index element={ <HomePage /> } path="/sky-fitness-pro" />
    <Route element={ <Login /> } path="/sky-fitness-pro/login" />
    <Route element={ <Register /> } path="/sky-fitness-pro/register" />
    <Route element={ <ChangeDataLogin /> } path="/sky-fitness-pro/change-login" />
    <Route element={ <ChangeDataPassword /> } path="/sky-fitness-pro/change-password" />
    <Route element={ <Profile /> } path="/sky-fitness-pro/profile" />
    <Route element={ <Workout /> } path="workout" />
  </Routes>
);
