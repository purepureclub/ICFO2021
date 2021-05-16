FROM node:alpine as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["/bin/sh", "-c", "sed -i 's/80/8080/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

