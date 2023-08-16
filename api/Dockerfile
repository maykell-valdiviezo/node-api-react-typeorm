FROM node:18-alpine AS builder

WORKDIR /app

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
RUN npm install --omit=dev

RUN mkdir ./src
COPY ./src ./src

COPY ./tsconfig.json .

RUN npm install typescript@5.1.6 -g
RUN npm run build

EXPOSE 3001

CMD node "./dist/index.js"

