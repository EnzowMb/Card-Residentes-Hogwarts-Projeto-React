import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

const label = `${props.label}`
const value = props.valor

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} valor={value}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa