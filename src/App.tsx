import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router';
import './style/fonts/font.css';
import { GlobalStyle } from './style/global/global';


const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppRouter />
  </BrowserRouter>
);

export default App;
