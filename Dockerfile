FROM node:hydrogen-alpine

WORKDIR /opt/app

# RUN apt-get update && apt-get upgrade -y && \
#     apt-get install -y npm

EXPOSE 3000

CMD ["npm" "start"]