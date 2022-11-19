FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
RUN npm i -g nodemon
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
