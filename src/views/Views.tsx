import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import AddNewAdvert from './AddNewAdvert/AddNewAdvert';
import AdvertisementTable from './AdvertisementTable/AdvertisementTable';
import Details from './Details/Details';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LoginForm from './LoginForm/LoginForm';

const Views: FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path = "/new"><AddNewAdvert/></Route>
    <Route path = "/table"><AdvertisementTable /></Route>
    <Route path = "/details/:advertId"><Details /></Route>
    <Route path = "/register"><RegistrationForm /></Route>
    <Route path = "/login" ><LoginForm /></Route>
  </Switch>
);

export default Views;
