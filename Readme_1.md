clone repo
npm install
docker build -t mi-web-personal .
docker run -p 3000:3000 mi-web-personal

para deployar en github 
npm install gh-pages --save-dev

Configura package.json 

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  // ...
},

Asegúrate de que el archivo "homepage" esté configurado para apuntar al nombre de usuario y repositorio de GitHub:
"homepage": "https://nombredeusuario.github.io/nombrerepositorio",

Ahora, puedes desplegar tu aplicación ejecutando el siguiente comando:
npm run deploy

