import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import TokenProvider from './components/auth/TokenProvider';
import { store, persistor } from './store';
import routes, { renderRoutes } from './routes';
import LoadingScreen from './components/loadingScreen';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <Router history={history}>
          <TokenProvider>{renderRoutes(routes)}</TokenProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
