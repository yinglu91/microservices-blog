FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

EXPOSE 4000
CMD ["npm", "run", "serve"]

# setup default command to run the container

# $ docker build -t yinglu91/m-posts:1.0 .
# docker run -p 4000:4000 -d yinglu91/m-posts:1.0
# in chrome: http://localhost:4000/posts

# $ docker run -it yinglu91/m-posts:1.0 sh    === override default cmd ^d to exit
# $ docker ps |grep ying
# $ docker exec -it ae3fb158b061 sh   === run sh inside the container
# $ docker logs ae3fb158b061
