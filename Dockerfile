FROM node:alpine
COPY . /app
WORKDIR /app
CMD node app.js

# docker build -t hello-docker .