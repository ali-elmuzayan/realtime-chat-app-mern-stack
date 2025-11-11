FROM nodejs:latest 
WORKDIR /app

COPY package*.json ./
RUN npm start 

EXPOSE 3000
CMD ["node", "server.js"] .
RUN npm install