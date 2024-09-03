# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code to the container
COPY ./src ./src
COPY ./public ./public
COPY ./ ./

# Build the React app for production
RUN npm run build

# Serve the app using a simple HTTP server
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 5000
