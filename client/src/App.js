import React, { useEffect } from 'react';
import './App.css';
import Meet from './Components/Meet/Meet';
import Join from './Components/Join/Join';
import Home from './Components/Home/Home';
import Meditation from './Components/Home/Home';
import PostureChecker from './Components/Home/Home';
import { ContextProvider } from './SocketContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
//function App()
function App() {

  useEffect(() => {
    document.title="Microsoft Teams"
    if (!navigator.onLine) alert('Connect to internet!');
  }, []);
 
    return (
      <ContextProvider>
        <Router>
          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/meet' component={Meet}></Route>
            <Route path='/join' component={Join}></Route>
            <Route path='/Meditation' component={Meditation} exact></Route>
            <Route path='/PostureChecker' component={PostureChecker}></Route>
          </Switch>
        </Router>
      </ContextProvider>
    );
 
}

export default App;
