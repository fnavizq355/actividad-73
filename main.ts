maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
