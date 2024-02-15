document.addEventListener('DOMContentLoaded', function() {
    let botao_menu = document.getElementById('btn_menu');
    let menu = document.getElementById('menu_mobile');
    let overlay = document.getElementById('overlay_menu');

    botao_menu.addEventListener('click', () => {
        menu.classList.add('abrir_menu');
    });

    menu.addEventListener('click', () => {
        menu.classList.remove('abrir_menu');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('abrir_menu');
    });

    var menuLinks = document.querySelectorAll('.menu-link');
    
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetID = this.getAttribute('href');
            var targetSection = document.querySelector(targetID);
            if (targetSection) {
                scrollTo(targetSection);
            }
        });
    });

    function scrollTo(element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop
        });
    }
});



function whatsapp (){
    var url_link = "https://linktr.ee/Phloja?fbclid=PAAaZTW1yV7W7AeqaMJNjTZZJjVIrokujPYws6vj7uCG9U7iE92TExVUWr3fI";
    window.open(url_link, '_blank');
  }

function instagram (){
    var url_link2 = "https://www.instagram.com/ph_lojafeminina/";
    window.open(url_link2, '_blank');
}


