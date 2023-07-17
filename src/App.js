import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Casa from './Componentes/Casa';

function App() {

  const casas = [
    {
      nome: 'Grifinória',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Lufa-Lufa',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Corvinal',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Sonserina',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    }
  ]

  const [residentes, setResidentes] = useState([])

  const aoNovoResidenteAdicionado = (residente) => {
    console.log(residente)
    setResidentes([...residentes, residente])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario casas={casas.map(casa => casa.nome)} aoResidenteCadastrado={residente => aoNovoResidenteAdicionado(residente)} />

      {casas.map(casa => <Casa
        key={casa.nome}
        nome={casa.nome}
        corPrimaria={casa.corPrimaria}
        corSecundaria={casa.corSecundaria}
        residentes={residentes.filter(residente => residente.casa === casa.nome)}
      />)}

    </div>
  );
}

export default App;
