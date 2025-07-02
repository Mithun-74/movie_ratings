import React from 'react'
import Home from './components/Home'
import {Routes, Route} from "react-router-dom"
import Favorite from './components/Favorite';
import NavBar from './components/NavBar';
import "./CSS/App.css";
import { MovieProvider } from './context/MovieContent';
import WatchLater from './components/watchLater';


const App = () => {
  return (
    <div>
    <MovieProvider>
    <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/watchLater" element={<WatchLater/>}/>
      </Routes>
    </main>
    </MovieProvider>
    </div>
  );
}

export default App;
