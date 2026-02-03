# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy the rest of the project
COPY . .

# Install Cypress binary (for faster CI runs)
RUN npx cypress install

# Set environment variable for Cypress cache (optional, for CI speed)
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

# Default command (can be overridden)
CMD ["npx", "cypress", "run"]
