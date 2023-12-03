import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './style/global/global';
import './style/fonts/font.css';
import { AppRouter } from './router';

import { Provider } from 'react-redux';

import { store } from './store/store';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  </Provider>
);

export default App;
