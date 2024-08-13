import React from 'react'
import { useState, useEffect } from "react";
import './SongsList.css'; 
import LikeFeature from '../LikeFeature'; 

export default function SongList({ }) {
  const [albums, setAlbums] = useState([]);
  const [albumRelease, setalbumRelease] = useState([]);
  const [albumArt, setalbumArt] = useState(null);
  const [like, setLike] = useState([]);

  
  const hardCodedSongs = {
    artistName: "Panic! At The Disco",
    artistAlbums: [
      {
        albumName: "A Fever You Can't Sweat Out",
        releaseDate: "2005",
        coverArt: "https://images.genius.com/7e34315edcfd5b7b7e018131a58e1b2a.1000x1000x1.png"
      }, 
      {
        albumName: "Pretty. Odd.",
        releaseDate: "2008",
        coverArt: "https://i1.sndcdn.com/artworks-000249416011-3iwwln-t500x500.jpg"
      }, 
      {
        albumName: "Vices & Virtues",
        releaseDate: "2011",
        coverArt: "https://upload.wikimedia.org/wikipedia/en/e/e1/Panic%21_at_the_Disco_-_Vices_%26_Virtues.jpg"
      }
    ]
  }
  
  async function getSongs() {
    const songsAPI = hardCodedSongs;
    const albumsArr = songsAPI.artistAlbums

    const albumNames = albumsArr.map(album => album.albumName)
    const albumReleaseDate = albumsArr.map(album => album.releaseDate)
    const albumCoverArt = albumsArr.map(album => 
      (
        <img 
        src={album.coverArt} 
        alt="album cover art" 
        className="albumCoverImg" 
        key={album.albumName}
        />
      
      ));

    setAlbums(albumNames)
    setalbumRelease(albumReleaseDate)
    setalbumArt(albumCoverArt)
    // try {
    //   const response = await fetch(songsAPI)
    //   const data = await response.json()
    //   console.log("Check data", data)
    //   const songNames = data.map(song => song.name)
    //   const songReleaseDate = data.map(song => song.name)
    //   const songCoverArt = data.map(song => song.name)

    //   setSongs(songNames)
    // } catch (err) {
    //   console.log(err)
    // }

  }

//   function handleLike(e) {
//     e.preventDefault();
//      setLike([
//       ...albums, {like: false}
//      ])
    
//  }


  function likeAlbum(like) {
    setLike(like.map((album) => {
      if (album === like) {
        return {
          ...album, like: !album.like
        }
      }
      return album
      console.log("This is a like but outside of the if statement.")
    }))
  }

  
  useEffect(() => {
    getSongs()
  }, [])
  
  return (
    <>
      <section>
        <h2> Albums</h2>
        <ul className='album-container'>
          {albums.map((a, i) => <li key={i} className="albumList" >{albumArt[i]} {a} - {albumRelease[i]}  <LikeFeature  likeAlbum={likeAlbum} like={like} /> </li>)}
          
        </ul>
      </section>  
    </>
  )
}
