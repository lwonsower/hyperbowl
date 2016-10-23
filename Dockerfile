FROM node:boron

RUN npm install webpack -g

# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Gather dependencies

COPY package.json /usr/src/app
RUN npm install

# Bundle app source

COPY . /usr/src/app

# Map app to Docker daemon

EXPOSE 4000
CMD [ 'npm', 'build' ]
CMD [ 'npm', 'restart' ]
