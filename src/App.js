import React from 'react'
import './App.css'
import Home from './Pages/Home'

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
