El componente <GiffExpertApp/> usa el hook useState para mantener el estado del array de categorías.
También tiene la función "onAddCategory", la cual se manda por props al componente <AddCategory/>.

El componente <AddCategory/> recibe por props "onAddCategory", retorna un formulario con un input para buscar la categoría.
Con el hook useState, creo la constante "inputValue" cuyo estado inicial es un string vacío.

Luego con la función "onInputChange" capturo mediante eventos el texto ingresado en el input, usando "event.target.value".
Con ese valor se asigna a la constante inputValue ==>> setInputValue( event.target.value )

Cuando se pone enter, se dispara el submit "onSubmit={ onSubmit }" y se ejecuta la función "onSubmit", lo que hace es limpiar los espacios mediante el trim y se pasa como argumento de la función "onNewCategory".

Esta función, será ejecutada en el <GiffExpertApp/> que importa el componente <AddCategory/>.