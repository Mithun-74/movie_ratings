import React from 'react'
import Home from './components/Home'
import {Routes, Route} from "react-router-dom"
import Favorite from './components/Favorite';
import NavBar from './components/navBar';
import "./CSS/App.css";


const App = () => {
  return (
    <div>
    <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App;
