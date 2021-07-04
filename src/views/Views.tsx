import Home from './Home/Home';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddNewAdvert from './AddNewAdvert/AddNewAdvert';

const Views: FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/new"><AddNewAdvert/></Route>
  </Switch>
);

export default Views;
