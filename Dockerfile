FROM node
MAINTAINER bingoogolapple
COPY app.js app.js
CMD ["node","app.js"]
EXPOSE 8888