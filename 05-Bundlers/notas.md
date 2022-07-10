Modulo: Codigo que cumple una tarea especifica y que indica sobre que piezas de codigo depende. Cada pagina de nuestro sitio es un modulo en si mismo.
IIFE: Funciones que se ejecutan al momento de la carga de la pagina.
commondJS: Es una libreria que nos permite trabajar con archivos de JavaScript.
module.exports = {};: Es una forma de exportar un objeto de JavaScript. buena practica porque no pisa las funciones con las de otros modulos.
require: Es una funcion que nos permite importar un modulo.
tanto module y require se utilizan en el backend.
Bundler es un programa que revisa todas las dependencias de un modulo y las agrupa en un solo archivo. nos permite optimizar el codigo de nuestra aplicacion. El archivo que genera el bundler que se llama webpack y es el que va al index del website.
Webpack -> primero se inicializa con npm init, luego se ejecuta npm install webpack y webpack-cli, luego se ejecuta webpack.
Webpack-cli -> es una herramienta que nos permite ejecutar comandos de webpack.

ejemplo de IIFE

        (() => {
         console.log("Hello World"); // Hello World
        })();

aplicado a un site

        (async() => {
          await fetch('https://www.google.com');
        })();

Se usa para ejecutar funciones que no contaminen el scope global, ya que solo existe dentro de si misma. En el caso del async/await se usa porque node no puede ejecutarlo fuera de la funcion. Tambien para crear un scope con variables que no esten disponibles fuera de si. Encapsula el codigo y no mancha el scope global.

https://www.youtube.com/watch?v=yK_vE6ghox8
