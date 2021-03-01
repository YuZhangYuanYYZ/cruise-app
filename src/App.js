import React, { useState } from 'react';
import './App.scss';
import { MainContent } from './components/MainContent';
import { SideBar } from './components/SideBar';
import { TopHeader } from './components/TopHeader';
import { Footer } from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [sideBarVisibility, setsideBarVisibility] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        <TopHeader
          setsideBarVisibility={setsideBarVisibility}
          sideBarVisibility={sideBarVisibility}
        ></TopHeader>
        <div className="content">
          <SideBar sideBarVisibility={sideBarVisibility}></SideBar>
          <MainContent></MainContent>
        </div>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
