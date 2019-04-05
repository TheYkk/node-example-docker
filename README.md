[![pipeline status](https://gitlab.com/TheYkk/node-example-docker/badges/master/pipeline.svg)](https://gitlab.com/TheYkk/node-example-docker/commits/master)
[![](https://images.microbadger.com/badges/image/theykk/node-example-docker.svg)](https://microbadger.com/images/theykk/node-example-docker "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/theykk/node-example-docker.svg)](https://microbadger.com/images/theykk/node-example-docker "Get your own version badge on microbadger.com")

[![dockeri.co](https://dockeri.co/image/theykk/node-example-docker)](https://hub.docker.com/r/theykk/node-example-docker)
# Example nodejs with gitlab , docker 
Example node.js whoami app. Builded with docker,gitlab devops , nodejs 


# For test run
`docker run -p 8080:8080 -d theykk/node-example-docker`


# Quick setup
```bash
    git clone https://gitlab.com/TheYkk/node-example-docker.git
    cd node-example-docker
```    
# For build image
`docker build -t tag:version .`

# Gitlab CI Environments
- CI_REGISTRY = Default as `https://index.docker.io/v1/`
- CI_REGISTRY_PASSWORD = Your docker hub password
- CI_REGISTRY_USER = Your docker hub user

# After run
open `http://IPADDR:8080`