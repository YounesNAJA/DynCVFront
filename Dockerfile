# NOTE: This Dockerfile is used to deploy DynCVFront App
#
# NOTE: It's based on node alpine image
#       Then nginx:alpine
#
#
FROM node:alpine AS builder

COPY . /DynCVFront

WORKDIR /DynCVFront

EXPOSE 80

RUN npm install
RUN npm run build --extract-css

FROM nginx:alpine

COPY --from=builder /DynCVFront/dist/* /usr/share/nginx/html/
