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

## Angular Fundamentals

### Building Blocks of Angular

Component: Un componente encapsula datos, html, y la lógica de la vista.

Module: Es un contenedor de componentes relacionados, un module puede estar resposable por una específica área de la aplicación

#### Components

Para usar un componente hay tres pasos principales:

1. Crear el componente:

 ```
 import { Component } from '@angular/core'; //Se importa el decorador del componente 
 
 @Component({
   selector: 'courses',
   template: '<h2>Courses<h2>'
 })
 export class CoursesComponent{
  code...
 }
 ```
 @Component es el decorador que lleva un parametro que tiene 2 atributos principales, los cuales es el `selector` el cual lleva el nombre de la etiqueta del component en el html (<courses></courses>) y el tamplate, el cual contiene el html del cual esta hecho el componente.
 
2. Registrar el componente en un module

para registrar el componente en el app module se debe de ir al archivo app.module.ts e ingresar en el declaration del NgModule el componente, previamente se debe de haber importado este componente.
```
# import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent,
  # CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
```

3. Agregar el elemento en el html markup

Ahora se puede agregar en el archivo app.component.html, el cual es el archivo donde se encuentra el html de componente principal appComponent, la etiqueta de nuestro componente

`<courses></courses>`

Para facilitar la creación de componentes podemos utiliza el comando `ng g c nameComponent`, con este comando generamos 4 archivos y actualizamos el app.module.ts. Los archivos que se crean son:

course.component.css: que es donde se va poner el estilo del componen
course.component.html: que es donde va estar el html del componente
course.component.spec.ts: que es el archivo donde se pueden hacer pruebas del componente
course.component.ts: y el archivo donde se va crear el componente

### Template 

En el atributo template podemos mostrar datos de la siguiente manera:

```
 import { Component } from '@angular/core'; //Se importa el decorador del componente 
 
 @Component({
   selector: 'courses',
   template: '<h2>{{ title }}<h2>'
 })
 export class CoursesComponent{
  title = "List of courses";
 }
```
incluso se pueden tener metodos que retornen datos:
```
 import { Component } from '@angular/core'; //Se importa el decorador del componente 
 
 @Component({
   selector: 'courses',
   template: '<h2>{{ getTitle() }}<h2>'
 })
 export class CoursesComponent{
  title = "List of courses";
  
  getTitle(){
   return title;
  }
 }
```
A la sintaxis `{{ getTitle() }}` se le llama interpolación

### Directivas
Con las directivas podemos manipular el elemento dom, en nuestro caso sería `ngFor` para mostrar la lista de cursos
```
 import { Component } from '@angular/core'; //Se importa el decorador del componente 
 
 @Component({
   selector: 'courses',
   template: `
   <h2>{{ getTitle() }}<h2>
   <ul>
    <li *ngFor="let course of listCourses">
     {{ course }}
    </li>
   </ul>
   `
 })
 export class CoursesComponent{
  title = "curses"
  listCourses = ["courses1","courses2","courses3"]
  
  getTitle(){
   return title;
  }
 }
```
### Dependency Injection

Supongamos que tenemos un servicio en un archivo llamado courses.service.ts

```
export class CoursesService{
  title = "List of course"
  listCourses = ["courses1","courses2","courses3"]
  
  getTitle(){
   return title;
  }
  getCourses(){
   return listCourses;
  }
 }
 ```
Podemos injectar este componente sin tener que crear una instancia de este de la siguiente manera
```
export class CoursesComponent{
  title = "curses"
  courses;
  constructor(service: CoursesService){
   this.courses = service.getCourses()
  }
 
  }
  ```
  Para que se pueda injectar el servicio también debemos registrarlo en archivo app.module.ts como un provider de la siguiente manera:
  
  ```
#import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  # CoursesService
  ],
  bootstrap: [AppComponent]
})
```

Otra forma más sencilla de crear un servicios es con el siguiente comando de Angula CLI `ng g s nameService` el cual nos creará los siguiente archivos:

email.service.ts: que es el archivo donde tendremos nuestro servicio
email.service.spec: archivo para pruebas  

En el archivo email.service.ts tendremos lo siguiente:
```
import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  constructor() { }

}
```
En donde `@Injectable()` es un decorador para injectar dependencias, con el caso de los componentes no se necesita este decorador por que el decorador `@Component` ya contiene este decorador contiene internamente el decorador `@Injectable()`

### Property Banding

El property banding solo funcioana de un sentido, sirve para cambiar el Dom, desde el componente al Dom, pero no puede hacer cambios desde el Dom hacia el componente.Para utilizar property banding en Angular lo hacemos de la siguiente manera:
``` 
 @Component({
   selector: 'courses',
   template: `
    <img [src] = "imageUrl"] />
   `
 })
 export class CoursesComponent{
  imageUrl = "http://fsjnsfjnss"
 }
```

### Attribute binding 
Hay atributos que se pueden encontrar en HTML pero no en el DOM, por ejemplo el atributo colspan
``` 
 @Component({
   selector: 'courses',
   template: `
    <table>
     <tr>
      <td [colspan]="colsPan"></td>
     </tr>
    </table>
   `
 })
 export class CoursesComponent{
  colspan = 2;
 }
```
Este código no funcionara ya que el atributo colpan no existe en el DOM, es un atributo propio de HTML, cuando utilizamos property banding hay que recordar que estamos haciendo cambios sobre el DOM y no sobre atributos de HTML. Para que se pueda utilizar esta propiedad lo debemos hacer de la siguiente manera:
``` 
 @Component({
   selector: 'courses',
   template: `
    <table>
     <tr>
      <td [attr.colspan]="colsPan"></td>
     </tr>
    </table>
   `
 })
 export class CoursesComponent{
  colspan = 2;
 }
```
