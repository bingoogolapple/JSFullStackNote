FROM node

MAINTAINER bingoogolapple "bingoogolapple@gmail.com"

WORKDIR /app

RUN npm install -g forever

RUN npm install -g jspm

COPY . /app/

RUN npm install

RUN jspm install

EXPOSE 80

CMD forever app.js