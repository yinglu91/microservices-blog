FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

EXPOSE 4003
CMD ["npm", "run", "serve"]

# setup default command to run the container

# $ docker build -t yinglu91/m-moderation:1.0 .
# $ docker push yinglu91/m-moderation:1.0

# docker run -p 4003:4003 -d yinglu91/m-moderation:1.0
# in postman: POST http://localhost:4003/events

