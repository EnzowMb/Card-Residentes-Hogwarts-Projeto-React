import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Casa from './Componentes/Casa';

function App() {

  const casas = [
    {
      nome: 'Grifinória',
      corPrimaria: '#EEBA30',
      corSecundaria: '#964446',
    },
    {
      nome: 'Lufa-Lufa',
      corPrimaria: '#372E29',
      corSecundaria: '#deee4f',
    },
    {
      nome: 'Corvinal',
      corPrimaria: '#5D5D5D',
      corSecundaria: '#425596',
    },
    {
      nome: 'Sonserina',
      corPrimaria: '#5D5D5D',
      corSecundaria: '#2A623D',
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
