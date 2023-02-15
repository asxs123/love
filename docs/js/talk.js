new TypeIt("#zjlwmh", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("ZJL && WMH")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("Z_W 恋 爱 日 记")
    .pause(3000)
    .go();

new TypeIt('#talkToWMH', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();