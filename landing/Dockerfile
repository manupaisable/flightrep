
FROM node:0.10-onbuild

# grunt global installation
RUN npm install -g grunt-cli

RUN echo "alias ll='ls -la'" >> ~/.bashrc

CMD cp -rf /usr/src/app/* /usr/src/flightrep/landing; cd /usr/src/flightrep/landing; node server.js
