FROM node:16 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:16 AS production
ENV NODE_ENV=production
WORKDIR /app
RUN yarn add sharp
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD ["npm","start"]



# # Base on offical Node.js Alpine image
# FROM node:16-alpine

# # Set working directory
# WORKDIR /usr/app

# RUN apt-get update --allow-releaseinfo-change && apt-get install -y nginx



# # Copy package.json and package-lock.json before other files
# # Utilise Docker cache to save re-installing dependencies if unchanged
# COPY ./package*.json ./
# #RUN npm install typescript --dev
# # Install dependencies
# RUN npm install --force && \
#     npm cache clean --force

# # Copy all files
# COPY ./ ./
# ENV NODE_ENV=production
# # Build app
# RUN npm run build

# # Expose the listening port
# EXPOSE 3000

# RUN chmod -R 777 /usr/app/.next/cache


# # Run container as non-root (unprivileged) user
# # The node user is provided in the Node.js Alpine base image
# USER node

# # Run npm start script when container starts

# CMD [ "npm","run", "start" ]


# # Build the app
# FROM node:16-alpine as build
# WORKDIR /app

# COPY . .
# RUN npm ci
# RUN npm run build
# COPY ./.next ./.next


# # Run appx
# FROM node:16-alpine

# # Only copy files required to run the app
# COPY --from=build /app/.next ./
# COPY --from=build /app/package.json ./
# COPY --from=build /app/package-lock.json ./

# EXPOSE 3000

# # Required for healthcheck defined in docker-compose.yml
# # If you don't have a healthcheck that uses curl, don't install it
# RUN apk --no-cache add curl

# # By adding --production npm's devDependencies are not installed
# RUN npm ci --production
# RUN ./node_modules/.bin/next telemetry disable

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# USER nextjs
# CMD ["npm", "start"]