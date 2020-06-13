import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* ITERATION 1 */}
      
      <div className="container">
        <div className="row">
          <CountriesList />
          <Switch>
            <Route path='/:id' component={CountryDetail}></Route>
          </Switch>
        </div>
      </div>
      <main>
        
      </main>
    </div>
  );
}

export default App;
