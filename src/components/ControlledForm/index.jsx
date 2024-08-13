import React from 'react'
import { useState, useEffect } from "react";
import './ControlledForm.css'

export default function ControlledForm() {
  const [lyrics, setLyrics] = useState([]);
  const lyricsAPI = "https://api.lyrics.ovh/v1/Panic!%20At%20the%20Disco/High%20Hopes"

  async function getLyrics() {

    try {
      const response = await fetch(lyricsAPI)
      const data = await response.json()
      const lyricData = data.lyrics
      console.log("Check ControlledForm data", lyricData)
      setLyrics(lyricData)
    } catch (err) {
            console.log(err)
          }
      
    
  }

  useEffect(() => {
    getLyrics()
  }, [])

  
//   async function getSongs() {
//     setAlbums(hardCodedSongs.artistAlbums)
//     // const songsAPI = hardCodedSongs;
//     // const albumsArr = songsAPI.artistAlbums

//     // const albumNames = albumsArr.map(album => album.albumName)
//     // const albumReleaseDate = albumsArr.map(album => album.releaseDate)
//     // const albumCoverArt = albumsArr.map(album => 
//     //   (
//     //     <img 
//     //     src={album.coverArt} 
//     //     alt="album cover art" 
//     //     className="albumCoverImg" 
//     //     key={album.albumName}
//     //     />
      
//     //   ));

//     // setAlbums(albumNames)
//     // setalbumRelease(albumReleaseDate)
//     // setalbumArt(albumCoverArt)


//     // try {
//     //   const response = await fetch(songsAPI)
//     //   const data = await response.json()
//     //   console.log("Check data", data)
//     //   const songNames = data.map(song => song.name)
//     //   const songReleaseDate = data.map(song => song.name)
//     //   const songCoverArt = data.map(song => song.name)

//     //   setSongs(songNames)
//     // } catch (err) {
//     //   console.log(err)
//     // }



  return (
    <>
    <h2 className='lyricsh2'>Lyrics</h2>
    <pre className='lyricstext'>{lyrics}</pre>
    </>
  
  )
}
