#!/bin/bash
sudo apt update
sudo apt upgrade -y

#install nodejs

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - 

sudo apt-get install  nodejs curl -y

