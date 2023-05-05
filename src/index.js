window.addEventListener("scroll", function () {
    var header = this.document.getElementById("desktop-menu");
    header.classList.toggle("abajo", this.window.scrollY>0);
})

window.addEventListener("scroll", function () {
    var header = this.document.getElementById("mobile-menu");
    header.classList.toggle("abajo", this.window.scrollY>0);
})

//var swiper = new Swiper(".mySwiper", {});
let menuToggle = document.getElementById("dropdown-btn");
menuToggle.addEventListener('click', function (){
    dropdown()
})

function dropdown() {
    let nav = document.getElementById("my_topnav");
    if (nav.className === "topnav") {
      nav.className += " dropdown-content";
    } else {
      nav.className = "topnav";
    }
}