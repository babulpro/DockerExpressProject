FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY app/ ./app
COPY public/ ./public

RUN adduser -D expressuser
USER expressuser
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "app/app.js"]