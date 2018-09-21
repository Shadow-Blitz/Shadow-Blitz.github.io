deg = 0
var tick = () => {
    document.querySelector('body').style.background = `background linear-gradient(${deg += .5}deg, #26B1CC, #ec448c) fill`
    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)