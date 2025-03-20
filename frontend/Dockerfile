# Use the official Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json /app/
COPY package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . /app/

# Expose the port for React
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
