# AngularCourse

Documentación de Angular

## Configuración del ambiente de desarrollo

1. Descargar y configurar NodeJs.
Se descarga de la pagina de NideJs la version estable y se realizan las siguientes configuraciones(Linux):

 ```
 sudo mkdir /usr/lib/nodejs  
 sudo tar -xJvf node-v8.9.2-linux-x64.tar.xz -C /usr/lib/nodejs 
 sudo mv /usr/lib/nodejs/node-v8.9.2-linux-x64 /usr/lib/nodejs/node-v8.9.2
 ```
 
Se añade las siguientes lineas al archivo .profile de la siguiente manera:

```
 # Nodejs
 export NODEJS_HOME=/usr/lib/nodejs/node-v8.9.2
 export PATH=$NODEJS_HOME/bin:$PATH
 ```
  
y se refreca el archivo `. ~/.profile`

2. Configurar npm

* Se crea directorio para las instalaciones globales
  `mkdir ~/.npm-global`
* Se configura el nuevo path en npm
  `npm config set prefix '~/.npm-global'`
* Se agrega la siquiente linea en el archivo .profile
 `export PATH=~/.npm-global/bin:$PATH`
* update en variables del sistema
  `source ~/.profile`
  
3. Instalar angular cli
`sudo npm install -g @angular/cli`
para provar que angular cli haya quedado bien instalada utilizamos el siguiente comando
`ng --version`

4. Se instala Visual Studio Code

## Primer app de angular

Para crear con angular cli un nuevo proyecto se realiza con el siguiente comando
`ng new hello-world`
Esto crea una carpeta en nuestro caso llamada hello-world, ingresamos a ella por consola y con el siguiente comando se puede iniciar la aplicación. 
`ng server`

## TypeScript Fundamentals

TypeScript es un super set de javaScript que contiene nuevas caracteristicas de javaScript. 

### Variables

En typeSript se utiliza la palabra let para declarar una nueva variable, ejme:
`let variable;`
Estas variables no pueden cambiar el tipo de variable una vez hayan sido inicializadas, como al caso contrario de javaSript que puede cambiar el tipo de la variable en cualquier momento.

### Tipos de variables

Se tienen los siguientes tipos en typeScript:
````
let a: number;
let b: boolean;
let c: string;
let d: any;
````
tambien se pueden tener arreglos de la siguiente manera:
``
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];
``

Se puede notar que el tipo any puede contener cualquier tipo de variable 




  


