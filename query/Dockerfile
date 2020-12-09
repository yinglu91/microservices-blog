FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

EXPOSE 4002
CMD ["npm", "run", "serve"]

# setup default command to run the container

# $ docker build -t yinglu91/m-query:1.0 .
# $ docker push yinglu91/m-query:1.0

# docker run -p 4002:4002 -d yinglu91/m-query:1.0
# in chrome: http://localhost:4002/posts
# $curl -i localhost:4002/posts

