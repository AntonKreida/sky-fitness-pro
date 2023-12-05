import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router';
import './style/fonts/font.css';
import { GlobalStyle } from './style/global/global';
import { store } from './redux';


const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  </Provider>
);

export default App;
