# build state for building frontend assets

FROM node:alpine AS builder

# Add the following line 
#ENV CI=true

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build


# nginx state for serving content

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# $ docker build -t yinglu91/m-client:1.0 .
# $ docker push yinglu91/m-client:1.0

# docker run -p 8080:80 -d yinglu91/m-client:1.0
# in chrome: http://localhost:8080/
# $curl -i localhost:8080