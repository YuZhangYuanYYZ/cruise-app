import React from 'react';
import './App.css';
import { SideBar } from './components/SideBar';
import { TopHeader } from './components/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader></TopHeader>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
