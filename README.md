# Execproxy

[![CircleCI](https://circleci.com/gh/tuimac/execproxy.svg?style=shield)](https://circleci.com/gh/tuimac/execproxy)

Execproxy is just the web application which execute host OS shell command.<br>
The way of the deployment is on only docker environment.
But there are some security problem this application because you can run the host os shell command via docker. You have to understand that before you use this application.

## How to use
Execproxy is the application as a docker image. ([Dokcer Hub Repository](https://hub.docker.com/repository/docker/tuimac/execproxy)) So first things first, you need to prepare the docker environment.<br>
Then you can pull a execproxy's docker image to execute the command below.
```
docker pull tuimac/execproxy
```

Next, you run the container by this command below
```
docker run -itd -p 80:80 -v /:/host --privileged --pid host -e HOST_MOUNTED_DIR-/host tuimac/execproxy
```
You must set `v /:/host --privileged --pid host -e HOST_MOUNTED_DIR-/host`. There are the reasons in 'Technology'. 

## Technology
How can you execute os shell command through docker? This is the why. Execproxy docker container share PID with host OS. Of course, the container need docker privilege when you create the container. Execproxy's backend is written in Python which throw the command get from frontend REST API to the shell. But before do that, that application execute `chroot /host` which `/host` is mounted on host OS `/`. That's why Execproxy on docker container can execute the host OS command.

![execproxy-architecture](https://user-images.githubusercontent.com/18078024/111866689-9a3ff980-89b2-11eb-8b95-2043298d06d0.png)

## Authors

* **Kento Kashiwagi** - [tuimac](https://github.com/tuimac)

If you have some opinions and find bugs, please post [here](https://github.com/tuimac/execproxy/issues).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Future Plan
- Try to cron function to execute command.
- Update security to authenticate user.
