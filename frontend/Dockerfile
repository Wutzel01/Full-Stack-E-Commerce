# Latest golang image on apline linux
FROM node:20-alpine

# Work directory
WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying all the files
COPY . .

# Exposing server port
EXPOSE 3000

# Starting our application
CMD ["npm", "start"]