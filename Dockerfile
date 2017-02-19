FROM mhart/alpine-node:6.9.5
MAINTAINER Giuem <i@giuem.com>

# ENV HTTP_AUTH_USER xxx
# ENV HTTP_AUTH_PASS xxx
# ENV WECHAT_CORPID xxx
# ENV WECHAT_SECRET xxx

COPY . /app  
WORKDIR /app

RUN npm install

EXPOSE 3030

CMD ["node", "app.js"]  
