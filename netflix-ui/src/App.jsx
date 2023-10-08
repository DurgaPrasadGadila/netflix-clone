import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import Login from './pages/Login'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import UserListedMovies from "./pages/UserListedMovies";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/signup' element={<Signup />}></Route>
      <Route exact path='player' element={<Player />}></Route>
      <Route exact path='/movies' element={<Movies />}></Route>
      <Route exact path='/tv' element={<TVShows />}></Route>
      <Route exact path="/mylist" element={<UserListedMovies />} />
      <Route exact path='/' element={<Netflix />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App;