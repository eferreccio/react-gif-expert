import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if (inputValue.trim().length <=1 ) return;//Para que cuando pongo menos de 1 caracter no lo inserte

        //setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim() )
        setInputValue(''); //Para que cuando apreto enter se borre lo que habia escrito antes
    }
  
    return (
    <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="buscar gifs"
                value= { inputValue }
                onChange={ onInputChange }
            />
    </form>
  )
}
