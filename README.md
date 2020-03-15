# Description

This repo is contains Dockerfile and all resources needed to build and run the DynCV Front app.

## Pull the image from DockerHub

Download the image file [here](https://hub.docker.com/r/younesnaja/dyncvfrontnode).

```docker
docker image pull younesnaja/dyncvfrontnode:latest
```

## Usage

### Build the image you just downloaded

#### Clone this repository
```git
git clone https://github.com/YounesNAJA/DynCVFront-Dockerfile
```

#### Build the image
```linux
cd DynCVFront-Dockerfile
```

```linux
docker build -t younesnaja/dyncvfrontnode:latest .
```
#### Create a container from the image you just built
Map 8080 port from the container to 80 port in the host machine

```docker
nohup docker container run -p 80:80 younesnaja/dyncvfrontnode:latest &
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
