FROM node:18.16.1-bullseye

# Create app directory
WORKDIR /usr/src/app

COPY ./package.json ./

RUN yarn install

COPY . ./

ENV OPENSSL_CONF=/dev/null

EXPOSE 3000

CMD ["yarn", "start"]
