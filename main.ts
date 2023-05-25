input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
        if (input.lightLevel() > 70) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . # # # .
                . . # . .
                `)
        } else {
            basic.clearScreen()
        }
    }
    if (input.lightLevel() <= 40) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
basic.showString("Medidor de luz")
basic.showString("GRUPO 1")
