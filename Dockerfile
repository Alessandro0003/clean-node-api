FROM node:18
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
ARG NODE_ENV
RUN npm install --only=prod