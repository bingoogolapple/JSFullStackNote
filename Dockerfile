FROM node

MAINTAINER bingoogolapple "bingoogolapple@gmail.com"

WORKDIR /app

RUN npm install -g forever

COPY ./package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000

CMD forever bin/www