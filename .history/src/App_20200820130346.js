import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar'
import Chat from './Component/MainChat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { roomid }= useParams
function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Sidebar />
            <Route path="/rooms/:roomid">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Home Screen</h1>
            </Route>
          </Switch>

        </Router>

      </div>
    </div>
  );
}

export default App;
