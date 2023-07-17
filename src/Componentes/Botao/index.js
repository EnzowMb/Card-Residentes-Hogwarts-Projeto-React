import './Botao.css'

const Botao = (props) => {

    const conteudo = `${props.children}`

    return (
        <button className='botao'>
            {conteudo}
        </button>
    )
}

export default Botao