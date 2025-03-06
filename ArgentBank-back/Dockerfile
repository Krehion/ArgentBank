FROM node:12

WORKDIR /app

COPY package.json package-lock.json ./

# Ensure all dependencies, including devDependencies, are installed
RUN npm install --omit=optional

COPY . .

# Ensure nodemon is installed globally in the container
RUN npm install -g nodemon

CMD ["npm", "run", "dev:server"]
