import { useState, useEffect } from 'react'
import './App.css'
import { ArtistIntro, ControlledForm, LikeFeature, SongList } from './components';

function App() {
  const [like, setLike] = useState(false)

  return (
    <>
      <h1>Mel's Playlist</h1>
      <ArtistIntro />
      <SongList like={like} setLike={setLike}/>
      {/* <ControlledForm />
      <LikeFeature /> */}

    </>
  )
}

export default App
