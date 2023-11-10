import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './style/global/global';
import './style/fonts/font.css';
import { AppRouter } from './router';


const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppRouter />
  </BrowserRouter>
);

export default App;
