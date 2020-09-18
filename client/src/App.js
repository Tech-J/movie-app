import React,{useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home  from './pages/Home.js';
import MovieShow from './pages/MovieShow';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Results from './pages/Results'
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import allActions from './actions/index'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allActions.authActions.loadUser())
  }, [])
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/search">
          <Results />
        </Route>
        <Route path="/movie/:id">
          <MovieShow />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
