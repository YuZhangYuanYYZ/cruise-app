import React, { useEffect } from 'react';
import './App.scss';
import { MainContent } from './components/MainContent';
import { SideBar } from './components/SideBar';
import { TopHeader } from './components/TopHeader';
import { Provider } from 'react-redux';
import store from './store';
import { getAgentsList } from './services/agents/api';

function App() {
  useEffect(() => {
    getAgentsList().then((data) => {
      console.log(data);
    });
  }, []);

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
