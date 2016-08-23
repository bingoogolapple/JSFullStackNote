FROM node

MAINTAINER bingoogolapple "bingoogolapple@gmail.com"

WORKDIR /app

RUN npm install -g forever

COPY . /app/

RUN npm install

EXPOSE 80

CMD forever app.js