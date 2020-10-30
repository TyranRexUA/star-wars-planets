import './App.scss';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Library from './components/Library/Library';
import PlanetPage from './components/PlanetPage/PlanetPage';
import SearchForm from './components/SearchForm/SearchForm';
import NotFound404 from './components/NotFound404/NotFound404';

const SearchFormAndLibrary = (
  <>
    <SearchForm />
    <Library />
  </>
)

const SearchFormAndPlanetPage = (
  <>
    <SearchForm />
    <PlanetPage />
  </>
)

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => SearchFormAndLibrary} />
        <Route path='/planet/:id' render={() => SearchFormAndPlanetPage} />
        <Route path='/search/:searchValue' render={() => SearchFormAndLibrary} />
        <Route path='/404' render={() => <NotFound404 /> } />
        <Route path='*' render={() => <Redirect to='/404' />} />
      </Switch>
    </div>
  );
}

export default App;
