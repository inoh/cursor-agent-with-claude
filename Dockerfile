FROM node:22-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install @fastify/static

COPY . .

RUN npm run build

FROM node:22-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production && npm install @fastify/static

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"] 