FROM node:alpine3.12

RUN mkdir -p /app

USER dos

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

EXPOSE 3001

CMD "npm" "start"