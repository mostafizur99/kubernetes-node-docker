FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]