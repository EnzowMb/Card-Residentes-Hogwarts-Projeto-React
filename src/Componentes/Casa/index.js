import './Casa.css'
import Residente from '../Residente'

const Casa = (props) => {

    const cssCorPrimaria = { borderColor: props.corPrimaria }
    const cssCorSecundaria = { backgroundColor: props.corSecundaria }
    const nome = props.nome

    return (
        (props.residentes.length > 0) ? <section className='casa' style={cssCorSecundaria}>
            <h3 style={cssCorPrimaria}>{nome}</h3>
            <div className='residentes'>
                {props.residentes.map(residente => <Residente
                    key={nome}
                    corDeFundo={props.corPrimaria}
                    nome={residente.nome}
                    cargo={residente.cargo}
                    imagem={residente.imagem}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Casa