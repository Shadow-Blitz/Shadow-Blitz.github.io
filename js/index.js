deg = 0
var tick = () => {
    document.querySelector('body').style.background = `background linear-gradient(${deg += 0.5}deg, #001aff, #ec448c)`
    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)