FROM node

MAINTAINER bingoogolapple "bingoogolapple@gmail.com"

WORKDIR /app

RUN npm install -g forever

RUN npm install -g jspm

COPY ./package.json /app/

RUN npm install

RUN jspm install

COPY . /app/

EXPOSE 3000

CMD forever app.js