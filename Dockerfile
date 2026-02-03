# Use official Node.js image
FROM cypress/included:15.7.1

# Set working directory
WORKDIR /app

# Copy only what is needed
COPY . .

# Install any extra dependencies (if needed)
# RUN npm ci || npm install

# Default command (can be overridden)
CMD ["npx", "cypress", "run"]
