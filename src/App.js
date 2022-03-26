import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Student from './Components/Student/Student';
import Faculty from './Components/Faculty/Faculty';
import Error from './Components/Error/Error';

function App() {
  return (
    <>  
    <div >
      <Routes>
        <Route exact path="/" component={Home}/>
        <Route path="/student" component={Student}/>
        <Route path="/faculty" component={Faculty}/>
        <Route component={Error}/>
      </Routes>

       <Home/>
       {/* <Faculty/>
       <Student/> */}
    </div>
    </>
  );
}

export default App;
