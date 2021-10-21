import React, { useState } from 'react';
import './App.scss';

import { TopHeader } from './components/TopHeader';
import { Footer } from './components/Footer';
import { SideBar } from './components/SideBar';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
export function App() {
  const [sideBarVisibility, setsideBarVisibility] = useState(false);
  return (
    <Provider store={store}>
      <TopHeader
        setsideBarVisibility={setsideBarVisibility}
        sideBarVisibility={sideBarVisibility}
      ></TopHeader>
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <SideBar sideBarVisibility={sideBarVisibility}></SideBar>
            {store ? <Router></Router> : null}
          </div>
        </BrowserRouter>
      </div>
      <Footer></Footer>
    </Provider>
  );
}
