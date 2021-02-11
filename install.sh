!/bin/bash


# Any installation related commands


sudo apt-get update -y
sudo apt install build-essential checkinstall -y
sudo apt install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev
sudo apt-get install python3-pip -y
pip3 install -r requirements.txt
# Any configuration related commands