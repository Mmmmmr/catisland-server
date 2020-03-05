FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --quiet node-gyp -g
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]