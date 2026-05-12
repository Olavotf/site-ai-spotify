import { useState } from "react";
import "./App.css";
import MusicCard from "./components/MusicCard";
import iwonder from "./assets/Graduation_(album).jpg";
import nevada from "./assets/download (1).jfif";
import son from "./assets/son.jpg";
import spotifyLogo from "./assets/spotify.svg";

function App() {
  const [play, setPlay] = useState(null);

  const musics = [
    {
      id: 1,
      title: "I wonder",
      artist: "Kanye West",
      cover: iwonder,
    },
    {
      id: 2,
      title: "Nevada",
      artist: "Vincetone",
      cover:
        nevada,
    },
    {
      id: 3,
      title: "leave me alone",
      artist: "Michael Jackson",
      cover:
        son,
    },
  ];

  function toggleMusic(id) {
    if (play === id) {
      setPlay(null);
    } else {
      setPlay(id);
    }
  }

  return (
    <div className="app">
      <h1 className="title">
        <img src={spotifyLogo} className="spotify-logo" />
        Spotify
      </h1>

      <div className="music-list">
        {musics.map((music) => (
          <MusicCard
            key={music.id}
            title={music.title}
            artist={music.artist}
            cover={music.cover}
            isPlaying={play === music.id}
            onPlay={() => toggleMusic(music.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;