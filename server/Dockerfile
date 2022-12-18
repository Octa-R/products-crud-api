FROM node as builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:19-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3000
CMD [ "node", "dist/index.js" ]