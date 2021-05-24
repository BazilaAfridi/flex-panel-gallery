const panels = document.querySelectorAll(".panel");

function toggleOpen(){

  this.classList.toggle("open");

}

function toggleActive(e){
  if(e.propertyName.includes("flex")){ /*check if transition to flex property has been applied then */
      this.classList.toggle("open-active");
  }

}
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
