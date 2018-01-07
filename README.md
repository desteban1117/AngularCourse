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

*Se crea directorio para las instalaciones globales
  `mkdir ~/.npm-global`
*Se configura el nuevo path en npm
  `npm config set prefix '~/.npm-global'`
*Se agrega la siquiente linea en el archivo .profile
 `export PATH=~/.npm-global/bin:$PATH`
*update en variables del sistema
  `source ~/.profile`



  


