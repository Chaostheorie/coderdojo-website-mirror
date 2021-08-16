# INFO: Based on debian:buster-slim
FROM registry.gitlab.cobalt.rocks/cobalt/docker-builder/coderdojo-zola-builder:latest

ADD ./configs /tmp/configs

ADD . /website/

ADD ./package.json ./yarn.lock /tmp/

RUN cd /tmp && yarn install && yarn pre:generate-licenses && cp licenses.csv /website

RUN cd /website && mv /tmp/node_modules . && cp /tmp/yarn.lock . && cp /tmp/package.json . && yarn pre:katex && ls

WORKDIR /website

EXPOSE 1111

CMD ls && yarn dev:compile && zola serve -i 0.0.0.0 -p 1111
