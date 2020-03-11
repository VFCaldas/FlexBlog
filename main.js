const sectionSobre = document.querySelector('#sobre');
const trackWindow = window.innerHeight * 0.6;
window.onload = function animaScroll(event) {

  sectionSobre.classList.add('ativo');

}

function animaProdutos() {
  const divProdutos = document.querySelectorAll('.produto-item');

  function animaProdutos() {
    divProdutos.forEach((div) => {
      const divTop = div.getBoundingClientRect().top;
      const divHeight = (divTop - trackWindow) < 0;
      if (divHeight) {
        div.classList.add('ativo');
      }
    })
  }

  window.addEventListener('scroll', animaProdutos);
}
animaProdutos();