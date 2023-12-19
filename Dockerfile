# Usa la imagen oficial de Node.js como base
FROM node:14-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos del proyecto al contenedor
COPY . .

# Compila la aplicación React para producción
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
