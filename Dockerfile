FROM node:16

WORKDIR /app

COPY . .

RUN npm install

COPY /src .

EXPOSE 8080

CMD ["npm", "start"]