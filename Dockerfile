# Use official Node.js image as base
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

RUN git pull

RUN sleep 10

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the app for production
RUN npm run build