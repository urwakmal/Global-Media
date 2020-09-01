function sideNav() {
    document.querySelector('.nav-list').classList.remove("fadeOutRight");
    document.querySelector('.nav-list').classList.add("fadeInRight");
    document.querySelector('.hamburger').style.display = "none";
    document.querySelector('.main-container').style.opacity = "0.1";
    document.querySelector('h1').style.opacity = "0.1";
    document.querySelector('.nav-list').style.transition = `100ms`;
    document.querySelector('.nav-list').style.visibility = `visible`;
    document.querySelector('body').style.position = "fixed";
    document.querySelector('body').style.transition = `800ms`;
    document.querySelector('body').style['margin-left'] = `-100%`;
    document.querySelector('.nav-list').style.backgroundColor = `#000000ff`;
}

function cross() {
    document.querySelector('.nav-list').classList.remove("fadeInRight");
    document.querySelector('.nav-list').classList.add("fadeOutRight");
    document.querySelector('.nav-list').style.transition = `1s`;
    document.querySelector('h1').style.opacity = "1";
    document.querySelector('.main-container').style.opacity = "1";
    document.querySelector('.hamburger').style.display = "block";
    document.querySelector('body').style.position = "static"
    document.querySelector('body').style["margin-left"] = `0%`;
}


window.onscroll = function() {myFunction()};

function myFunction() {
    if (window.scrollY > 50) {
        document.querySelector(".top-arrow").style.visibility = "visible";
    } else {
        document.querySelector(".top-arrow").style.visibility = "hidden";
    }
}
