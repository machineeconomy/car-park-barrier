var noble = require('noble');

noble.on('stateChange', function (state) {
    if (state === 'poweredOn') {
        noble.startScanning();
    } else {
        noble.stopScanning();
    }
});

// Checking, Scanning, stopping repeatedly
setInterval(function () {
    if (noble.state === 'poweredOn') {
        noble.startScanning();
        // console.log('Starting Scan...');
        setTimeout(function () {
            noble.stopScanning();
            // console.log('Stopping Scan...');
        }, 1000)
    }
}, 1000);

noble.on('discover', function (peripheral) {


    var advertisement = peripheral.advertisement;
    var localName = advertisement.localName;
    var txPowerLevel = advertisement.txPowerLevel;
    var manufacturerData = advertisement.manufacturerData;
    var serviceData = advertisement.serviceData;
    var serviceUuids = advertisement.serviceUuids;


    if (localName == "akita-car") {
        console.log("::BLE::", localName, "->", peripheral.rssi);
    }
});