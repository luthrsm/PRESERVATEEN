// SCROLLTOP
var linkTop = document.querySelector('.scrollTop');

window.addEventListener('scroll', function() {
  linkTop.classList.toggle('active', window.scrollY > 450)
})

function backTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}