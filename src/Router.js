import { MainContent } from './components/MainContent';
import { Help } from './Help';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

export function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <MainContent />
      </Route>
      <Route exact strict path="/dashboard">
        <MainContent />
      </Route>
      <Route exact strict path="/agent">
        <MainContent />
      </Route>
      <Route exact strict path="/mycruise">
        <MainContent />
      </Route>
      <Route exact strict path="/help">
        <Help />
      </Route>
    </Switch>
  );
}
