FROM node:20

USER root

RUN apt-get update && apt-get install -y \
    wget\
    nano

RUN npm cache clean --force 

RUN npm install -g npm@8.12.1

RUN npm install prisma -g \
    && npm install cors -g \
    && npm install dotenv -g \
    && npm install express -g \
    && npm install jsonwebtoken -g \
    && npm install nodemon -g \
    && npm install @prisma/client -g 

RUN mkdir -p /usr/userAPI

WORKDIR /usr/userAPI

# Copiar los archivos de usuario y prisma
COPY usuario/package*.json /usr/userAPI
COPY usuario/prisma /usr/userAPI/prisma  

RUN npm install

RUN npm install dotenv --save-d

# Ejecutar prisma generate con la ruta correcta
RUN prisma generate --schema=/usr/userAPI/prisma/schema.prisma

CMD ["nodemon", "app.js"]








