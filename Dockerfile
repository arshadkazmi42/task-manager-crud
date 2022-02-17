FROM node:14

WORKDIR /src

COPY . .

RUN npm install

ENV NODE_ENV=development

EXPOSE 8000

CMD ["npm", "run", "dev"]
