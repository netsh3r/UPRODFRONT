FROM node:17-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .
COPY config/nuxt.config.ts .

RUN apk add tzdata
RUN npm install -g npm@8.15.1
RUN npm install --global yarn
RUN yarn cache clean --force
RUN yarn install
RUN yarn run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000 

ENTRYPOINT ["node", ".output/server/index.mjs"]
