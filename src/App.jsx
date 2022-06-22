import './App.scss';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Library from './components/Library/Library';
import PlanetPage from './components/PlanetPage/PlanetPage';
import SearchForm from './components/SearchForm/SearchForm';
import Error from './components/Error/Error';
import DesktopHeader from './components/DesktopHeader/DesktopHeader';
import { IS_ELECTRON } from './constants/general';

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

const withHeader = (Component) => (
  <>
    {IS_ELECTRON && <DesktopHeader />}
    {Component}
  </>
)

const App = () => {
  return (
    <div className={IS_ELECTRON ? 'ElectronApp' : 'App'}>
      <Switch>
        <Route exact path='/' render={() => withHeader(SearchFormAndLibrary)} />
        <Route path='/planet/:id' render={() => withHeader(SearchFormAndPlanetPage)} />
        <Route path='/search/:searchValue' render={() => withHeader(SearchFormAndLibrary)} />
        <Route path='/error' render={() => withHeader(<Error />)} />
        <Route path='*' render={() => <Redirect to='/error' />} />
      </Switch>
    </div>
  );
}

export default App;
