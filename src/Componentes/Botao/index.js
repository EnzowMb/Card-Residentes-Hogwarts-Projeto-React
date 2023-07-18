import './Botao.css'

const Botao = (props) => {

    var teste = new Audio();
    teste.src = '/audio/botao-audio.mp3'

    const conteudo = `${props.children}`

    return (
        <button onMouseOver={e => teste.play()} className='botao'>
            {conteudo}
        </button>
    )
}

export default Botao