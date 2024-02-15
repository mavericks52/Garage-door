
var Gpio = require('onoff').Gpio;

var doorSwitch = new Gpio(7, 'out');

export default function doorCommand() {

    //var lightSwitch = new Gpio(0, 'out');

    //var lightInterval = setInterval(lightTrigger, 1000);

    var testInterval = setInterval(doorTrigger, 1000);
    /*
    function lightTrigger (){
        if(lightSwitch.readSync() ===0){
            lightSwitch.writeSync(1);
        } else {
            lightSwitch.writeSync(0);
        }
    }
    */
    function doorTrigger() {
        if (doorSwitch.readSync() === 0) {
            doorSwitch.writeSync(1);
        } else {
            doorSwitch.writeSync(0);
        }
    }

    function endBlink() {
        clearInterval(testInterval);
        doorSwitch.writeSync(0);
        doorSwitch.unexport();
    }




    setTimeout(endBlink, 1100);

}

