import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiffExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Rolling Stones' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return;
        //tratar de evitar usar el push, porque muta arreglo
        //categories.push(newCategory)
        setCategories( [ newCategory, ...categories ] )
    }

    //zG4u14AKJF70Obd3tm4nQW6fgno77lnh

  return (
    <>
        <h1>GifAppExpert</h1>

        <AddCategory
            onNewCategory={ (event) => onAddCategory(event) }
         />

        { 
            categories.map( (category) => ( 
                <GifGrid key={ category } category={ category }/>
            ))
        }
    </>
  )
}
