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
```
let a: number;
let b: boolean;
let c: string;
let d: any;
```
tambien se pueden tener arreglos de la siguiente manera:

```
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];
```

Se puede notar que el tipo any puede contener cualquier tipo de variable.

En typeSript tanbién se pueden definir constantes de la siguiente manera

```
const colorBlue = 0;
const colorRed = 1;
const colorGreen = 2;
```

Otra manera para crear varias constantes es utilizando la sintaxis enum:
```
enum color = {Blue = 0, Red = 1, Green = 2}
let backgroundColor = color.Blue
```
### Arrow functions

En javaSript se puede tener una función de la siguiente manera:
```
let log = function(message){
 console.log(message);
}
```

En typeScript se puede realizar de la siguiente manera:
```
let doLog = (message) => {
 console.log(message);
}
```
como solo tiene una linea la función podemos quitar los corchete y hacer el código más claro
```
let doLog = (message) =>  console.log(message);
```
A este tipo de funciones se le conoce tambien como funciones lambda.

### Interfaces

Podemos utilizar interfaces en typeScript de la siguiente manera:
```
interface Point{
 x: number,
 y: number
}

let drawPoint = (point: Point){
 /// code
}
```
### Clases

Las clases se definen de la siguiente manera:
```
class Point {
 x: number;
 y: numer;
 
 constructor(x?: number, y?: number){
  this.x = x;
  this.y = y;
 }
 draw(){
  //code
 }
 getDistance(){
  //code
 }
}
```
En la sintaxis x?: number lo que quiere decir la letra '?' es que el parametro x es opcional en el contructor o función. 

Una mejor manera de construir clases en typeScript es de la siguiente manera:
```
class Point {
 constructor(private _x?: number, private _y?: number){
 }
 
 get x(){
  return this._x
 }
 
 set x(value){
  this._x = value;
 }
 draw(){
  //code
 }
 getDistance(){
  //code
 }
}
```
Se puede notar que en el mismo contructor inicializamos las variables de la clase ademas que ya tienen esta forma `_x`, todo esto como convencion para que en los getter and setter las variables tengan simplemente el nombre de la variable, se puede notar que el get y el set son sintaxis de typeScript.

### Module

Para tener clases en otros archivos y poder utilizar dicha clase en cualquier archivo se hace de la siguiente manera:

primero se agrega la sintaxis export al principio de la clase

```
export class Point {
 constructor(private _x?: number, private _y?: number){
 }
 
 get x(){
  return this._x
 }
 ...
}
```
Con esto estamos diciendo que esta clase se va a exportar

luego para utilizar en cualquier otro archivo simplemente se debe de importar
```
import { Point } from './point';
let point = new Point(1, 2);
```






