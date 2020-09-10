FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY packaged.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm" "run" "dev"] 