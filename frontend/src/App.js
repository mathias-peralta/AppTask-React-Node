import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import NodeList from './components/NoteList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';


function App() {
  return (
    <Router>
      <Navigation />
      <div className = "container p-4">
        <Route path = "/" exact component = {NodeList}/>
        <Route path = "/edit:/:id" component = {CreateNote}/>
        <Route path = "/create" component = {CreateNote}/>
        <Route path = "/user" component = {CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
