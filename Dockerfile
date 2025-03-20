
FROM node:14

WORKDIR /app

# Copy the package.json from the frontend directory
COPY frontend/package.json /app/

RUN npm install

# Copy the rest of the application (assuming the rest is in frontend/)
COPY frontend/ /app/

CMD ["npm", "start"]
