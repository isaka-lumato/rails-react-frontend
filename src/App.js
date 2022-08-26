import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/messagesConfigure';
import Greeting from './components/Greeting';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
          {' '}
        </Routes>
        {' '}
      </BrowserRouter>
      {' '}
    </Provider>
  );
}

export default App;
