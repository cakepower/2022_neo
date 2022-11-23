let strip = neopixel.create(DigitalPin.P13, 64, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.setMatrixWidth(8)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
strip.setMatrixColor(5, 4, neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    if (input.lightLevel() > 220) {
        strip.rotate(1)
        basic.pause(100)
        strip.show()
    } else if (input.lightLevel() > 210) {
        strip.showRainbow(1, 360)
        strip.show()
        basic.pause(100)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setMatrixColor(randint(0, 7), randint(0, 7), neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
    }
})
