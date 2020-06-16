import React from 'react'

const GridItem = ({ trabajo, abrirModal }) => {
 
    return (
        <div className="item" onClick={() => abrirModal(trabajo)}>
            <img src={trabajo.imagen} alt="" />
        </div>
    )
}

export default GridItem