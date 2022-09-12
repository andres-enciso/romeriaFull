FROM node:14-alpine
# RUN mkdir -p /app/node_modules && chown -R node:node /app
WORKDIR /usr/src/app
COPY package*.json ./
# USER node
RUN npm install

COPY . .

RUN npm run prisma:generate

RUN npm run build

EXPOSE 5000
CMD [ "npm", "start" ]