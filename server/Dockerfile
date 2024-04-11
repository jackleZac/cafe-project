FROM node:alpine

# Create the app directory and set ownership
RUN mkdir /app && chown node:node /app
WORKDIR /app

# Switch to the "node" user
USER node

# Copy package.json and package-lock.json
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY --chown=node:node . .
COPY --chown=node:node middleware/authMiddleware.js ./
COPY --chown=node:node model/* ./

# Expose the port your application will run on
EXPOSE 8080

# Define the command to start your application
CMD ["npm", "start"]

