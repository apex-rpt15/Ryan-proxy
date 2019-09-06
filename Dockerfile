FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm install nodemon -g

EXPOSE 3000

CMD [ "npm", "run", "server-start"]