let zenbakia = 0
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    zenbakia = randint(0, 10)
    basic.showNumber(zenbakia)
    basic.pause(1000)
    // parea bada 
    // puntuak gehitu,
    // si no ez da parea 
    // bizitzak kendu
    if (zenbakia % 2 == 0) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
