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
