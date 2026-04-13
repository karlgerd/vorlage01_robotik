function Testfunktion (Text: string) {
    basic.showString(Text)
    basic.pause(100)
}
nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M3)
basic.forever(function () {
    Testfunktion("vorwärts")
    nezhaV2.comboRun(20, nezhaV2.VerticallDirection.Up)
    basic.pause(2000)
    Testfunktion("rückwärts")
    nezhaV2.comboRun(20, nezhaV2.VerticallDirection.Down)
    basic.pause(2000)
})
