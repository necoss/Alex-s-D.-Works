window.onload = function(){
setTimeout (function() {

  document.body.classList.add('modern-gallery--loaded')

  Draggable.create('.modern-gallery', {
    bounds:'body',
    inertia: true
  })
})
}