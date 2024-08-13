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

  
  return (
    <>
    <h2 className='lyricsh2'>Lyrics</h2>
    <pre className='lyricstext'>{lyrics}</pre>
    </>
  
  )
}
