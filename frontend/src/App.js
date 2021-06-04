import logo from './logo.svg';
import './index.css'
import {React, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dialogs from './dialogs/Dialogs'
function App() {
    const [state, setState] = useState(true)
    const [signIn, setSignIn] = useState(false)
  return (
      <div className="bg-purple-300 w-screen h-screen flex">
        <Router>
            <Route path="/dialogs" component={Dialogs}></Route>
        </Router>
      </div>
  );
}

export default App;
