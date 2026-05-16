import { useState, useRef } from 'react'
import './App.css'
import Album from './components/Album'

function App() {

  const musicas = [

    {
      id: 1,
      nome: "Good Morning",
      tempo: "3:15",
      arquivo: "/musicas/goodmorning.mp3"
    },

    {
      id: 2,
      nome: "Champion",
      tempo: "2:47",
      arquivo: "/musicas/champion.mp3"
    },

    {
      id: 3,
      nome: "Stronger",
      tempo: "5:11",
      arquivo: "/musicas/stronger.mp3"
    },

    {
      id: 4,
      nome: "I Wonder",
      tempo: "4:03",
      arquivo: "/musicas/iwonder.mp3"
    }

  ]

  const [musicaAtual, setMusicaAtual] = useState("")

  const audioRef = useRef()

  function tocarMusica(musica) {

    setMusicaAtual(musica.nome)

    audioRef.current.src = musica.arquivo

    audioRef.current.play()
  }

return (

  <div>

    <header className="navbar">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
        alt=""
      />

      <h1>Spotify</h1>

    </header>

    <div className="app">

      <Album
        titulo="Graduation"
        artista="Kanye West"
        capa="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg"
        musicas={musicas}
        musicaAtual={musicaAtual}
        tocarMusica={tocarMusica}
      />

      <audio ref={audioRef}></audio>

    </div>

  </div>

)
}

export default App