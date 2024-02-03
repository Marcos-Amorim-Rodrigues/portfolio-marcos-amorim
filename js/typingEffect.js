function typingEffect(){
    const texto = document.querySelector('#intro-container p');
    const arrayTexto = texto.innerHTML.split('');
    let i = 0;
    texto.innerHTML = "";
    const loop = setInterval(()=>{
        const cadaLetra = arrayTexto[i];
        texto.innerHTML = texto.innerHTML+cadaLetra;
        i++;
        if(i > arrayTexto.length-1)clearInterval(loop);
    },100);
}
export default typingEffect();
