import { Routes, Route } from 'react-router-dom';

import { Layout } from '@layouts/';
import {
  HomePage,
  Login,
  Register,
  ChangeDataLogin,
  ChangeDataPassword,
  Profile,
  Course,
} from '@pages/';


export const AppRouter = () => (
  <Routes>
    <Route element={ <Login /> } path="login" />
    <Route element={ <Register /> } path="register" />

    <Route element={ <Layout /> } path="/sky-fitness-pro">
      <Route index element={ <HomePage /> } />
      <Route element={ <Course /> } path="course" />
      <Route element={ <Profile /> } path="profile" />
      <Route element={ <ChangeDataLogin /> } path="change-data/login" />
      <Route element={ <ChangeDataPassword /> } path="change-data/password" />
    </Route>
  </Routes>
);
