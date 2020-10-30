import React, { useState } from 'react';
import './App.css';
import Sidebar from './Component/Sidebar'
import Chat from './Component/MainChat'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="app">
      {!user ? <h1>Login </h1> :
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
      }

    </div>
  );
}

export default App;
