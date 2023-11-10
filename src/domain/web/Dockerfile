FROM node:14

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm run build

CMD ["npx", "serve", "-s", "build", "-l", "3000"]
