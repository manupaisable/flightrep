
FROM node:0.10-onbuild

# grunt global installation
RUN npm install -g grunt-cli

# personalization
RUN echo "alias ll='ls -la'" >> ~/.bashrc

# make sure required distributions are available in app
CMD cp -rf `ls -d /usr/src/app/node_modules/*/dist/*` /usr/src/app; cp . /usr/src/app; node server.js
