
function initScrollAnimacao(){
    const secoes = document.querySelectorAll('.js-scroll');
    if(secoes.length){
        const windowMetade = window.innerHeight * 0.6;
        function animaScroll(){
            secoes.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if(sectionTop < 0)section.classList.add('ativo');
            })
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
}
export default initScrollAnimacao();
