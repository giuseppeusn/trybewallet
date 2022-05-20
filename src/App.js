import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-neutral-700 h-screen">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
