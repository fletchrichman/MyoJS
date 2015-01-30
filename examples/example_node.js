var Myo = require('../template/entry'),
  hub = new Myo.Hub();


var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty.usbserial-A6026PO6", {
  baudrate: 9600
});

hub.on('ready', function() {
    console.log("ready");
});
hub.on('connect', function() {
    console.log("connected!");
});

hub.on('disconnect', function() {
    console.log("disconnect");
});

serialPort.on("open", function () {
  console.log('open');
  
  hub.on('pose', function(pose) {
      currentPose = pose;
      switch(currentPose.type) {
          case currentPose.POSE_FIST:
              console.log('fist')
                serialPort.write("s\n", function(err, results) {
                  console.log('err ' + err);
                  console.log('results ' + results);
                });
              break;
          case currentPose.POSE_WAVE_IN:
              console.log('wave in')
                serialPort.write("a\n", function(err, results) {
                  console.log('err ' + err);
                  console.log('results ' + results);
                });
              break;
          case currentPose.POSE_WAVE_OUT:
              console.log('wave out')
                serialPort.write("d\n", function(err, results) {
                  console.log('err ' + err);
                  console.log('results ' + results);
                });
              break;
          case currentPose.POSE_FINGERS_SPREAD:
              console.log('fingers spread')
              break;
          case currentPose.POSE_TWIST_IN:
              console.log('twist in')
              break;
          case currentPose.POSE_NONE:
          default:
             /* title.style.color = "#00b2c4";
              title.innerHTML = "No pose detected"; */
              break;
      }
  });
});  





