deg = 0
var tick = () => {
    document.querySelector('body').style.background = `background linear-gradient(${deg += .9}deg, #26B1CC, #ec448c)`
    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)