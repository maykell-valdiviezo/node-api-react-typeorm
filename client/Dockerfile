FROM node:18-alpine AS builder

WORKDIR /app

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY ./tsconfig.json .
COPY ./src .

RUN npm install --omit=dev

RUN npm run build
#RUN mkdir .next
#COPY .next ./.next

EXPOSE 3000
EXPOSE 80

CMD ["npm", "start"]