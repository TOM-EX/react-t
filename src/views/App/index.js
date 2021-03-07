
// import './index.css';
import React from 'react'
import Footer from '@/components/footer';
import Yheader from '@/components/header';
import routes from '@/routers/index.js';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Yheader />
        {renderRoutes(routes)}
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
