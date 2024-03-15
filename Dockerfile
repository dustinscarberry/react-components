FROM nginx:1.25.4-alpine3.18

WORKDIR /usr/share/nginx/html

COPY --chown=nginx:nginx . /usr/share/nginx/html

# build app dependencies
RUN apk add --no-cache yarn && \
  yarn build-storybook && \
  apk del yarn

EXPOSE 80