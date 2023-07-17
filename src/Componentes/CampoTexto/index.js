import './CampoTexto.css'

const CampoTexto = (props) => {

    const label = `${props.label}`
    const placeholder = `${props.placeholder}...`
    const required = props.obrigatorio
    const value = props.valor

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input value={value} onChange={aoDigitado} placeholder={placeholder} required={required} />
        </div>
    )
}

export default CampoTexto