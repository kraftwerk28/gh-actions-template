FROM node:alpine
WORKDIR /opt/app
COPY ./ ./
CMD node ./
