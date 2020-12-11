FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

EXPOSE 4005
CMD ["npm", "start"]

# setup default command to run the container

# evebt-bus/Dockerfile

# $ docker build -t yinglu91/m-event-bus:1.0 .
# $ docker push yinglu91/m-event-bus:1.0

# docker run -p 4005:4005 -d yinglu91/m-event-bus:1.0
# in chrome: http://localhost:4005/events

