window.onload = function() { document.body.className = ''; }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }


// typed.js configuration
$(function(){
  $(".type").typed({
    strings: [
      "an adventurer",
      "a software developer",
      "a creator",
      "an enthusiast"
    ],
    typeSpeed: 70,
    backDelay: 200,
    loop: true
  })
})
