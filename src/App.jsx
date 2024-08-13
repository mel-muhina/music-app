import { useState, useEffect } from 'react'
import './App.css'
import { ArtistIntro, ControlledForm, LikeFeature, SongList } from './components';

function App() {


  return (
    <>
      <h1>Mel's Playlist</h1>
      <ArtistIntro />
      <SongList />
      <ControlledForm />


    </>
  )
}

export default App
