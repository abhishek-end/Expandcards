const dot = document.getElementById('dot');
  

document.body.onmousemove =  event =>{
    const   {clientX , clientY}= event;
    dot.style.left = `${clientX -250}px`
    dot.style.top = `${clientY -250}px`
}

const panels = document.querySelectorAll(".panel")
panels.forEach(panel => {
    panel.addEventListener("click" , () => {
        activeRemoveClass();
        panel.classList.add('active')
    })
})
  function activeRemoveClass(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
  }