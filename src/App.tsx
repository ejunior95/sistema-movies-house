import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const TelaInicial = () => {
  return (
    <div>

    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TelaInicial} />
      </Switch>
    </Router>
  );
}
