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
    <Route element={ <Layout /> } path="/sky-fitness-pro" />
  </Routes>
);
