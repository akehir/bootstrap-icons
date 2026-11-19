FROM nginx:1.30-alpine-slim

RUN apk upgrade --no-cache

WORKDIR /app

COPY ./dist/example-app/browser/ .

COPY ./nginx.conf /etc/nginx/nginx.conf
