import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Library from './components/Library/Library';
import Card from './components/Card/Card';

const App = () => {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
