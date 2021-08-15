import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/auth/Login/Login'
import Pages from './components/pages/Pages'
import './App.scss';
import { Provider } from "react-redux";
import store from './redux/store'
import setAuthToken from './utils/setAuthToken'

function App() {
  useEffect(() => {
    setAuthToken(localStorage.getItem('token'))
  }, [])
  return (
    <Provider store={store}>
    <Router>
       <Switch>
         <Route path='/' exact component={Login}/>
         <Route path='/pages' exact component={Pages}/>
       </Switch>
    </Router>
    </Provider>
  );
}

export default App;
