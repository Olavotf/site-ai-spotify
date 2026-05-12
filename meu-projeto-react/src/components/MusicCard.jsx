import "./MusicCard.css";

function MusicCard({
    title,
    artist,
    cover,
    isPlaying,
    onPlay,
}) {
    return (
        <div className={`card ${isPlaying ? "playing" : ""}`}>
            <img src={cover} alt={title} />

            <div className="info">
                <h2>{title}</h2>
                <p>{artist}</p>
            </div>

            <button onClick={onPlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
}

export default MusicCard;