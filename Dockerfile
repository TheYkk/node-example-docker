FROM node:8-slim

WORKDIR /app
COPY . /app

CMD ["node", "app.js"]
EXPOSE 8080
