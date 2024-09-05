let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountaines3 = document.getElementById('mountains3');
let mountaines4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let palstin = document.querySelector('.plastine');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*3 + 'px';
    mountaines3.style.top = value*2 + 'px';
    mountaines4.style.top = value*1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value*3 + 'px';
    palstin.style.fontSize = value + 'px'
    if( scrollY>=183){
        palstin.style.fontSize = 183 + 'px'
       
    }
}

 
    