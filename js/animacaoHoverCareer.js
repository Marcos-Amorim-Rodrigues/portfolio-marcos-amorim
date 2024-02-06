function animar(id){
  const img = document.querySelector(`#img-${id}`);
  img.classList.add('activo');
}

function desanimar(id){
  const img = document.querySelector(`#img-${id}`);
  img.classList.remove('activo');
}