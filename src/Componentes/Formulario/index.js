import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [casa, setCasa] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Formulario submetido!!')
        props.aoResidenteCadastrado({
            nome,
            cargo,
            imagem,
            casa
        })
        setNome('')
        setCargo('')
        setImagem('')
        setCasa('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um card de um Residente de Hogwarts!</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Seu nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    label="Cargo"
                    placeholder="Seu cargo em Hogwarts"
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    label="Casa"
                    itens={props.casas}
                    obrigatorio={true}
                    valor={casa}
                    aoAlterado={valor => setCasa(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario