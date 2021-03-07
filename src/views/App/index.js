
// import './index.css';
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import Footer from '@/components/footer';
import Yheader from '@/components/header';
import routes from '@/routers/index.js';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Yheader />
        {renderRoutes(routes)}
        <Footer />
      </HashRouter>
    </Provider>
  );
}

export default App;
