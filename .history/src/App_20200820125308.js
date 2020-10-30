import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar'
import Chat from './Component/MainChat'
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/app">
              <Sidebar />
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
