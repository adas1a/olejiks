import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import AddNewAdvert from './AddNewAdvert/AddNewAdvert';
import TablePagination from './Table/tablePagination';

const Views: FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/new"><AddNewAdvert/></Route>
    <Route path="/table"><TablePagination /></Route>
  </Switch>
);

export default Views;
