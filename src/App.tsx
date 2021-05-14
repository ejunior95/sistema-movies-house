import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TelaInicial from '../src/screens/TelaInicial';
import Home from '../src/screens/Home';
import Detalhes from '../src/screens/Detalhes';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TelaInicial} />
      </Switch>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
      <Switch>
        <Route path="/detalhes" component={Detalhes} />
      </Switch>
    </Router>
  );
}
