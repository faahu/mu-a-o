import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age , setage ] = React.useState(19);

    const birthday = () => {
        setage(age + 1);
    }

    const resbirthday = () => {
        setage(age - 1);
    }

    return (
        <div>
            <h1>HOLA {props.name} DESDE COMPONENTE FUNCIONAL </h1>
            <h2>TU EDAD ES : { age } </h2>
            <div>
                <button onClick={birthday}>CUMPLIR AÑOS</button>
                <button onClick={resbirthday}>RESTAR AÑOS</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    Nombre: PropTypes.string,


};


export default GreetingF;