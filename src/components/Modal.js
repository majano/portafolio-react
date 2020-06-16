import React from 'react'

const Modal = ({ seleccionado, cerrarModal }) => {
    return(        
        <div className="overlay">
            <div className="modal">
                <button className="cerrar" onClick={cerrarModal}></button>
                <div className="contenedor">
                    <div className="imagen">
                        <img src={seleccionado.imagen} alt=""/>
                    </div>
                    <div>
                        <h2>{seleccionado.titulo}</h2>
                        <p>{seleccionado.descripcion}</p>
                        <a href={seleccionado.link} target="_blank" className="enlace_proyecto">Ver Proyecto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal