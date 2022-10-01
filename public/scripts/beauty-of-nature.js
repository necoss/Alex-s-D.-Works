//* 3D Scroll

let zSpacing = -1000
let lastPos = zSpacing / 5
const $frames = document.getElementsByClassName('beauty-of-nature--frame')
let frames = Array.from($frames)
let zVals = []

window.onscroll = function() {
  let top = document.documentElement.scrollTop
  let delta = lastPos - top

  lastPos = top

  frames.forEach(function(n, i){
    zVals.push((i * zSpacing) + zSpacing)
    zVals[i] += delta * -5
    let frame  = frames[i]
    let transform = `translateZ(${zVals[i]}px)`
    let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0

    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
  })
}

window.scrollTo(0, 1)

//*  Sound Button

let soundbutton = document.querySelector('.beauty-of-nature--soundbutton')
let audio = document.querySelector('.beauty-of-nature--music')

soundbutton.addEventListener('click', e => {
  soundbutton.classList.toggle('paused')
  audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
  soundbutton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
  audio.pause()
}