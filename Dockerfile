FROM node:6-alpine

WORKDIR /app
COPY . /app

CMD ["node", "app.js"]
EXPOSE 8080
