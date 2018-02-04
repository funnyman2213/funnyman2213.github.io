function calculate() {
    // declare all the variables
    var dyf, ay, af, ae, dye, cye, cfe, cyf, cfy, functionOutput;

    // get values
    cye = Number(document.getElementById('cye').value);
    cfe = Number(document.getElementById('cfe').value);
    cyf = Number(document.getElementById('cyf').value);
    var output = document.getElementById('output');

    /* set value of co-ordinate(friend, you) to the
       inverse of co-ordinate(you, friend) */
    if (cyf+180 > 360) {
        cfy = cyf-180;
    } else {
        cfy = cyf+180;
    }

    dyf = 1;

    try {
        // multiply by Math.PI/180 to convert to radians
        if (Math.abs(cye-cyf)>180) {
            if(cye>cyf){
                ay=360-cye+cyf;
            } else {
                ay=360-cyf+cye;
            }
        } else {
            ay = Math.abs(cye-cyf);
        }
        if (Math.abs(cfe-cfy)>180) {
            if(cfe>cfy){
                ay=360-cfe+cfy;
            } else {
                ay=360-cfy+cfe;
            }
        } else {
            af = Math.abs(cfe-cfy);
        }
        dye = Math.sin(af*(Math.PI/180)) / Math.sin((180-ay-af)*(Math.PI/180)) / dyf;
        functionOutput = '<p>The enemy is '+dye+' times your friends distance from you</p>'
        } catch (e) {
        console.log(e);
        functionOutput = '<p>Invalid Opperation</p>'

    }
    output.innerHTML = functionOutput;
}
