import React from 'react'
import '../Card/index.css'
import BtnEmpleadoDelMes from '../BtnEmpleadoDelMes'

const Card = props => {

    const {
        // props del boton MonthEmployee;
        employeeData,
        handleEmpleadoMes,
        empleadoDelMesID
    } = props

    const { name, sector, id, avatar } = employeeData;

    const isMonthEmployee = empleadoDelMesID === id

    const handleClick = (event) => console.log('Eso fue un click');

    return (
        <div className={`App-card ${isMonthEmployee ? 'eotm' : ''}`}>
            <div className="App-cardDiv">
                <img src={employeeData.avatar} alt="img" className="App-avatar" />
            </div>
            <div className="App-cardDiv">
                <h1 className="App-itemName">
                    {employeeData.name}
                </h1>
                <h2 className="App-itemSection">
                    {employeeData.sector}
                </h2>
            </div>
            <div className="App-cardDiv App-cardButtons">
                <button className="App-button" 
                onClick = {handleClick}>
                    Editar
                </button>
                <button className="App-button" 
                onClick = {handleClick}>
                    Eliminar
                </button>

                {!isMonthEmployee &&
                    <BtnEmpleadoDelMes employeeId={id} handleEmpleadoMes={handleEmpleadoMes} />
                }


            </div>
        </div>
    )
}

export default Card;