import React from 'react';
import './App.css';
import { MainContent } from './components/MainContent';
import { SideBar } from './components/SideBar';
import { TopHeader } from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader></TopHeader>
      <div className="content">
        <SideBar></SideBar>
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
