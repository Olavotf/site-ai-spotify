function Musica(props) {

  return (

    <div

      className={props.selecionada ? "musica ativa" : "musica"}

      onClick={props.onClick}

    >

      <div>

        <p className="nomeMusica">{props.nome}</p>

        <span>Kanye West</span>

      </div>

      <span>{props.tempo}</span>

    </div>

  )
}

export default Musica