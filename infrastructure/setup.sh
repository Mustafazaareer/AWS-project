#!/bin/bash
sudo apt update
sudo apt upgrade -y

#install nodejs

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - 

sudo apt-get install  nodejs curl -y


git clone https://github.com/Mustafazaareer/book-app-mustafa.git app 
cd app && npm install
npm run build

sudo mv ./infrastructure/app.service /etc/systemd/system/
sudo systemctl deamon-reload
sudo systemctl enable app.service
sudo reboot

