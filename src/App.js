import React from 'react';
import './App.scss';
import { MainContent } from './components/MainContent';
import { SideBar } from './components/SideBar';
import { TopHeader } from './components/TopHeader';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TopHeader></TopHeader>
        <div className="content">
          <SideBar></SideBar>
          <MainContent></MainContent>
        </div>
      </div>
    </Provider>
  );
}

export default App;
