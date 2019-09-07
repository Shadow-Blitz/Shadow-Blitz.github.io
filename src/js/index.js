deg = 0
var tick = () => {
    document.querySelector('body').style.background = `linear-gradient(${deg += .9}deg, #26B1CC, #ec448c)`
    document.querySelector('html, body').style.backgroundSize = `cover`
    requestAnimationFrame(tick)

}
requestAnimationFrame(tick)