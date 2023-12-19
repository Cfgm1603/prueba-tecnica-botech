# Specify the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the project files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3005

# Define the command to start the app
CMD ["npm", "start"]
