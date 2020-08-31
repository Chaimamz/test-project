alert("You must watch the film")

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
document.querySelector('.button').addEventListener('click',e => {
  if(e.target.innerHTML == 'French'){
    e.target.innerHTML = 'English'
    document.querySelector('.french').style.display = 'none'
    document.querySelector('.english').style.display = 'block'
  }
  else{
    e.target.innerHTML = 'French'
    document.querySelector('.english').style.display = 'none'
    document.querySelector('.french').style.display = 'block'
  }
})
