import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Reservation from './components/Reservation';
import Profil from './components/Profil';

import Header from './components/Header';
import Home from './components/Home';
import Manual from './components/Manual';
import Contact from './components/Contact';
import Login from './components/Login';
import FooterComponent from './components/FooterComponent';
import Inscription from './components/Inscription';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/Manual" exact component={Manual} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Reservation" exact component={Reservation} />
        <Route path="/Profil" exact component={Profil} />
        <Route path="/Inscription" exact component={Inscription} />
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
