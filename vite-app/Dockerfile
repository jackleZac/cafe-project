FROM node:16 

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies 
RUN npm install 

# Copy the rest of application code including subfolders 
COPY . . 

# Specify the command to start app
CMD ["npm", "run", "dev"]
