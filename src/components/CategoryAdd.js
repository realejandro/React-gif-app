import React from 'react';
import { useState } from 'react';
//import { useState } from "react";



const CategoryAdd = ({ setCategories }) => {

    const [inputValue,  setInputValue] = useState(''); //Si quieres que tu state sea un string vacio dejalo como String vacio

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue( e.target.value ) 
        //No utilizamos los tres puntos aqui debido a que no estamos cambiando el objeto input
        //Sino que estamos usando el mismo!!!
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories( category => [inputValue, ...category ]);
            setInputValue('');
        }

        if( inputValue === 'Alejandro'){
            console.log('The beast');
        }
        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
             type="text"
             value = {inputValue}
             onChange = { handleInputChange }
            />
        </form>
      
    )
}

export default CategoryAdd
