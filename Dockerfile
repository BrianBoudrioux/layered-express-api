FROM node:16

WORKDIR /app

COPY . .

RUN npm install -g @babel/node

RUN npm install

COPY /src .

EXPOSE 8080

CMD ["babel-node", "app.js"]