FROM node:20-alpine
WORKDIR /app
COPY *.json .
RUN npm install
COPY . .
RUN npx prisma generate
CMD ["npm", "run", "start"]