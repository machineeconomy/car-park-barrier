
### Install Nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt install nodejs=8.x
npm -v

The last command should return a version number.
WARNING: use node version  like here, on vs 10.x are some strange errors with noble

### Install BLE dependencies
sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev

### Install noble (A Node.js BLE central module.)
npm install noble