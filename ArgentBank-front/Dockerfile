# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock before copying everything
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --no-optional

# Copy all project files (except those in .dockerignore)
COPY . .

# Expose the port
EXPOSE 3000

# Start Vite server
CMD ["yarn", "run", "dev", "--host", "0.0.0.0"]

