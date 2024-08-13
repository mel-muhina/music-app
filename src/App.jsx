import { useState, useEffect } from 'react'
import './App.css'
import { ArtistIntro, ControlledForm, LikeFeature, SongList } from './components';

function App() {


  return (
    <>
      <ArtistIntro />
      <SongList />
      <ControlledForm />


    </>
  )
}

export default App
