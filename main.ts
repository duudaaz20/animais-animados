basic.showIcon(IconNames.Duck)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . # # . .
    # # # . .
    . # # # #
    . # # # .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(500)
})
