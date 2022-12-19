# stage 1: Build
FROM node as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# stage 2: Run
FROM node:14-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY --from=build /app/dist .
EXPOSE 3000
CMD [ "yarn", "start" ]