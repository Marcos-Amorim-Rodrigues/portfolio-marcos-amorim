function initPhotoHover() {
  const photo = document.querySelector('#photo');
  photo.addEventListener('mouseover', onMouseMove);
  function onMouseMove(event) {
    const tooltipBox = createTooltip();
    moveTooltip.tooltipBox = tooltipBox;
    removeTooltip.tooltipBox = tooltipBox;
    removeTooltip.element = this;
    this.addEventListener('mouseleave', removeTooltip);
    this.addEventListener('mousemove', moveTooltip);
  }
  const removeTooltip = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', removeTooltip);
    },
  };
  const moveTooltip = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 'px';
      this.tooltipBox.style.left = event.pageX + 'px';
    },
  };
  function createTooltip() {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('tooltip');
    infoDiv.innerText = '🧑 Marcos Amorim, developer and designer.';
    document.body.appendChild(infoDiv);
    return infoDiv;
  }
  console.log(photo);
}
export default initPhotoHover();
