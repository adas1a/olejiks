import Home from './Home/Home';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddNewAdvert from "./AddNewAdvert/AddNewAdvert";
import Table from './Table/Table';


const Views: FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/new"><AddNewAdvert/></Route>
    <Route path={"/table"}><Table /></Route>
  </Switch>
);

export default Views;