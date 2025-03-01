#!/bin/bash


# git clone the repo

# cd to the cloned repo directory


sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable" -y

sudo apt-get update -y

sudo apt-get install docker-ce docker-ce-cli containerd.io -y

# Create the container image, this will use the Dockerfile

sudo docker build -t xmeme_app .

# Run the app container on port 8081

sudo docker run -d --net="host" xmeme_app

# Run sleep.sh

chmod +x sleep.sh

./sleep.sh


# Execute the POST /memes endpoint using curl

curl --location --request POST 'http://localhost:8081/memes' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "xyz",
    "url": "https://abc.com",
    "caption": "This is a meme"
}'


# Execute the GET /memes endpoint using curl

curl --location --request GET 'http://localhost:8081/memes'
