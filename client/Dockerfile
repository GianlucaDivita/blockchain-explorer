FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
USER root
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]