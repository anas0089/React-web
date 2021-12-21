import React from 'react'
import './App.css'
import Home from './Pages/Home'
import {

  BrowserRouter as Router,

  Switch,

  Route,

  Link

} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Switch>
      <Route path="/">
       <Home />
      </Route>
      <Route path="/movies">
      </Route>
     </Switch>
    </div>
  );
}
export default App;
