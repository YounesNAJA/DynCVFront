# NOTE: This Dockerfile is used to deploy CVMicroservice
#
# NOTE: It's based on alpine image instead of alpine/git
#       I prefered this official image over the alpine/git
#   
FROM node:alpine AS builder

# Install tini and bash
RUN apk add --update tini && \
    apk add --no-cache bash

# Install git and openssh
RUN apk --update add git less openssh && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*

# SSH Config
RUN mkdir /root/.ssh && \
    echo $'Host github.com\n\tHostname github.com\n\tIdentityFile /root/.ssh/id_rsa_dyncvfront\n\tPreferredauthentications publickey' >> /etc/ssh/ssh_config

# Copy over private key, and set permissions
# Warning! Anyone who gets their hands on this image will be able
# to retrieve this private key file from the corresponding image layer
ADD id_rsa_dyncvfront /root/.ssh/id_rsa_dyncvfront

RUN chmod 400 /root/.ssh/id_rsa_dyncvfront

# Create known_hosts
RUN touch /root/.ssh/known_hosts

# Add gitlab key
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts
## RUN ssh-add /root/.ssh/id_rsa_dyncvfront

#RUN ln -sf /dev/stdout /var/log/nginx/access.log \
#	&& ln -sf /dev/stderr /var/log/nginx/error.log
# forward request and error logs to docker log collector

# Clone the conf files into the docker container
RUN git clone git@github.com:YounesNAJA/DynCVFront.git

EXPOSE 80
# expose these ports on the docker virtual network
# you still need to use -p or -P to open/forward these ports on host
WORKDIR /DynCVFront

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /DynCVFront/dist/* /usr/share/nginx/html/
# ENTRYPOINT ["npm","run", "build"]
# CMD ["/bin/bash"]
# required: run this command when container is launched
# only one CMD allowed, so if there are multiple, last one wins