import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GridItem from './components/GridItem'
import Header from './components/Header'
import Modal from './components/Modal'

function App() {

  const [trabajos, setTrabajos] = useState([])

  const [modal, setModal] = useState({ 
    seleccionado: {},
    visible: false
  })

  const url = '/portafolio.json' // Json de la data
  
  useEffect(() => {
    
    const fetchData = () => {      

      axios.get(url)
        .then(res => {
          //console.log(res.data.data)
          setTrabajos(res.data.data)
        })
        .catch(error => console.log(error))
    }
    fetchData()
    
  },[])

  const abrirModal = (data) => {    
    //console.log(data) // Colecto la data del item seleccionado
    setModal({seleccionado:data, visible:true}) 
  }

  const cerrarModal = () => {
    setModal({seleccionado:{}, visible:false}) 
  }

  return (
    <div className="App">
      <div className="container">
        <Header />

        <div className="grid">          
          {
            trabajos.length > 0 ?
              trabajos.map((trabajo, index) => {                
                return(                  
                  <GridItem 
                  key={index} 
                  trabajo={trabajo}
                  abrirModal={abrirModal}
                  />
                )
              })
            : "No hay trabajos."
          }
        </div>

        {(modal.visible === true) ? <Modal seleccionado={modal.seleccionado} cerrarModal={cerrarModal} />  : false }
        
      </div>
    </div>
  );
}

export default App;
