
function initlightAndDarkButton(){
    const logoTheme = document.querySelector('.switch input');
    logoTheme.addEventListener('click',initTheme);

    function initTheme(){
        const theme = document.querySelector('.switch input');
        if(theme.classList.contains('activate')){
            lightTheme(theme);
        }
        else{
            darkTheme(theme);
        }
    }
    function darkTheme(theme){
        const head = document.querySelector('head');
        const newStyle = document.createElement('link');
        newStyle.rel = 'stylesheet';
        newStyle.href = "style/dark-styles.css"
        head.appendChild(newStyle);
        theme.classList.add('activate');
    }
    function lightTheme(theme){
        const head = document.querySelectorAll('head link');
        head[head.length-1].remove();
        theme.classList.remove('activate');
    }
}
export default initlightAndDarkButton();
