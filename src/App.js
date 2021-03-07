import React from 'react';
import Navbar from './components/Navbar/Navbar';

import Pricing from './components/Pricing';
import {BrowserRouter as  Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
      <Router>
      <div className="App">
          <Navbar></Navbar>
          <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/pricing'exact component={Pricing}></Route>
          <Route path='/about'exact component={About}></Route>
          </Switch>
      </div>
      </Router>
   
    
  );
}
const Home =() =>
(
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;
