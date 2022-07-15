Orden Creacion De una App de React:
Componentes:

1. app.js - El archivo principal de la aplicación.Se llama asi siempre por buenas practicas!
2. index.js
3.

Los componentes son extensiones de funciones de CLASE:

function Clase(){
return (

<div></div>
)
}

se declaran usando la primera letra en mayuscula
retornan contenido HTML que debe ir declarado entre parentesis
hay componentes funcionales y componentes de clase

un componente puede tener algo llamado props, que son propiedades, es un objeto que puede acceder desde afuera el componente, el componente a su vez internamente tiene un estado. about
Las props se envian como atributos de html dentro del tag

crear app en react:

- npx create-react-app nombre-app // crea una app en la carpeta nombre-app
- npx create-react-app . // crea una app en la carpeta actual

los componentes siempre se exportan como "export default -Componente-"
las constantes, objetos, arreglos con export

si tengo un array en un componente, la forma de recorrerlo es con el metodo .map => pero debo agregar en el elemento contenedor el atributo key:

    function Container(){
        const Users = [
            {id:1, name: 'Juan', age: 20},
            {id:2, name: 'Pedro', age: 30},
            {id:3, name: 'Maria', age: 40}
        ]
    return(
        <div>
            {user.map((user) => (
                    <section key={user.name + user.surname}>
                    < Saludo user={user}/>
                    </section>
                ))}
        </div>
    );
    }

    function Saludo(props){
        return (
            <h1>
                Hola, {props.user.name} {props.user.surname}
            </h1>
        );
    }

---

import React from 'react';

class App extends React.Component {
render(){
return (

<div classname = "App">
<h1>Hola Mundo, componente de clase</h1>
</div>
);
}
}

function App(){
return (

<div className = "App">
<h1>Hola Mundo, componente funcional </h1>
</div>
);
}
export default App;
