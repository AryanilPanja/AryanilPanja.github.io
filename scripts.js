window.onscroll = function(){stickyfxn()};

let navbar = document.getElementById('navbar');

let sticky = navbar.offsetTop;

function stickyfxn(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
}