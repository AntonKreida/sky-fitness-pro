import { Routes, Route } from 'react-router-dom';

import { Layout, LayoutAuth } from '@layouts/';
import {
  HomePage,
  Login,
  Register,
  ChangeDataLogin,
  ChangeDataPassword,
  Profile,
  Course,
} from '@pages/';

import { MainContent } from './components';


export const AppRouter = () => (
  <Routes>
    <Route element={ <LayoutAuth /> } path="/sky-fitness-pro">
      <Route element={ <Login /> } path="login" />

      <Route element={ <Register /> } path="register" />
      <Route element={ <ChangeDataLogin /> } path="change-data-login" />
      <Route element={ <ChangeDataPassword /> } path="change-data-password" />
    </Route>
    <Route element={ <Layout /> } path="/sky-fitness-pro">
      <Route index element={ <HomePage /> } />
      <Route element={ <Course /> } path=":id" />
      <Route element={ <Profile /> } path="profile" />
      <Route element={ <MainContent /> } path="workout/:id" />
    </Route>
  </Routes>
);
