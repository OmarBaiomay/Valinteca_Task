/**** variables ****/
const 
    navbar = document.querySelector(".navbar"),
    navbarList = document.querySelector(".nav-list"),
    menuBtn = document.querySelector(".menu"),
    cancelBtn = document.querySelector(".cancel")

    
/**** Particles JS For Hero Section ****/
particlesJS.load('particles-js', 'scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


/**** Open & Close Navbar ****/
menuBtn.addEventListener("click", (e)=>{
    navbarList.classList.add("active");
})

cancelBtn.addEventListener("click", (e)=>{
    navbarList.classList.remove("active");
})

/**** Change Navbar Color On Scroll ****/

window.onscroll = function() {scrollFunction()};

const scrollFunction = ()=> {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
}