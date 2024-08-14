import { useState, useEffect } from 'react'
import './App.css'
import { ArtistIntro, ControlledForm, SongList, Nav } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Nav />} >
       
            <Route path="/" element={<ArtistIntro />} />
            <Route path="/albums" element={<SongList />} />
            <Route path="/lyrics">
                <Route index element={<ControlledForm />} />
                <Route path=":id" element={<h1>Specific Lyrics To Your Song</h1> } />
            </Route>
            <Route path="*" element={<h1>Page Not Found</h1>} />

        </Route>
      </Routes>
    </>
  )
}

export default App
