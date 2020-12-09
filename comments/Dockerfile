FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

EXPOSE 4001
CMD ["npm", "run", "serve"]

# setup default command to run the container

# $ docker build -t yinglu91/m-comments:1.0 .
# $ docker push yinglu91/m-comments:1.0

# docker run -p 4001:4001 -d yinglu91/m-comments:1.0
# in chrome: http://localhost:4001/posts/:id/comments

