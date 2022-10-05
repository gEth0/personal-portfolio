window.onscroll = function(){nav_scroll()}
nav = document.getElementById('nav')

function nav_scroll(){
    if(document.documentElement.scrollTop>=50){
       nav.classList.add('scrolled')
    }else {
        nav.classList.remove('scrolled')
}
}