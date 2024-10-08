import React from 'react'
import { useState, useEffect } from "react";
import './SongsList.css'; 
import LikeFeature from '../LikeFeature'; 
import { useNavigate } from 'react-router-dom';

export default function SongList() {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();
  
  const hardCodedSongs = {
    artistName: "Panic! At The Disco",
    artistAlbums: [
      {
        albumName: "A Fever You Can't Sweat Out",
        releaseDate: "2005",
        coverArt: "https://images.genius.com/7e34315edcfd5b7b7e018131a58e1b2a.1000x1000x1.png",

      }, 
      {
        albumName: "Pretty. Odd.",
        releaseDate: "2008",
        coverArt: "https://i1.sndcdn.com/artworks-000249416011-3iwwln-t500x500.jpg",
   
      }, 
      {
        albumName: "Vices & Virtues",
        releaseDate: "2011",
        coverArt: "https://upload.wikimedia.org/wikipedia/en/e/e1/Panic%21_at_the_Disco_-_Vices_%26_Virtues.jpg",

      }
    ]
  }
  
  async function getSongs() {
    setAlbums(hardCodedSongs.artistAlbums)
  }


  useEffect(() => {
    getSongs()
  }, [])
  
  return (
    <>
      <section>
        <button className={"nav-btn"} onClick={() => navigate("/") }>Back to Home</button>
        <h2 className='albumh2'> Albums</h2>
        <ul className='album-container'>
          {albums.map((album, i) =>
            <li key={i} className="albumList">
                  <img 
                    src={album.coverArt} 
                    alt="album cover art" 
                    className="albumCoverImg" 
                    key={album.albumName}
                  />
                  <span>{album.albumName}</span>
                  <span>{album.releaseDate}</span>
                  <LikeFeature /> 
            </li>
          )}
        </ul>
      </section>  
    </>
  )
}

