let bool = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        bool = 1
        motorbit.turnleft(50)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        bool = 2
        motorbit.turnright(50)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        bool = 0
        motorbit.forward(50)
    }
    while (pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        if (bool == 1) {
            motorbit.turnleft(50)
        } else if (bool == 2) {
            motorbit.turnright(50)
        }
    }
})
