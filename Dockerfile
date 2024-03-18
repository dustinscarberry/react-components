# stage 1
FROM nginx:1.25.4-alpine3.18 as builder

WORKDIR /usr/share/nginx/html

COPY --chown=nginx:nginx . /usr/share/nginx/html

RUN apk add --no-cache yarn && \
  yarn install --immutable && \
  yarn build-storybook && \
  apk del yarn

# stage 2
FROM nginx:1.25.4-alpine3.18

COPY --from=builder /usr/share/nginx/html/storybook-static /usr/share/nginx/html
COPY /docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80