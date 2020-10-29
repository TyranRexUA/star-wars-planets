import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Library from './components/Library/Library';
import Card from './components/Card/Card';
import PlanetPage from './components/PlanetPage/PlanetPage';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <Library />} />
        <Route path='/planet/:id' render={() => <PlanetPage />} />
        <Route path='*' render={() => <Redirect to='/404' />} />
      </Switch>
    </div>
  );
}

export default App;
