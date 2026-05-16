import Musica from './Musica'

function Album(props) {

  return (

    <div className="album">

      <div className="topo">

        <img src={props.capa} alt="" />

        <div className="infos">

          <p>Álbum</p>

          <h1>{props.titulo}</h1>

          <h3>{props.artista}</h3>

        </div>

      </div>

      <div className="lista">

        {props.musicas.map(musica => (

          <Musica

            key={musica.id}

            nome={musica.nome}

            tempo={musica.tempo}

            selecionada={props.musicaAtual === musica.nome}

            onClick={() => props.tocarMusica(musica)}

          />

        ))}

      </div>

    </div>

  )
}

export default Album