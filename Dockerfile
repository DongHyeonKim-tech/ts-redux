FROM node:12 AS builder

WORKDIR /haeahn.bim.measurement

COPY . .

ENV PATH /haeahn.bim.measurement/node_modules/.bin:$PATH

RUN npm cache clean --force

RUN rm -rf node_modules package-lock.json

RUN npm install

RUN npm run build

FROM nginx:1.18.0-alpine

COPY --from=builder /haeahn.bim.measurement/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]