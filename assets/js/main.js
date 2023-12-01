var cat_nav = document.querySelectorAll('.nav-link');
var cat_card = document.querySelectorAll('.card');
for(var i=0;i<cat_nav.length;i++){
    cat_nav[i].addEventListener('click',function(){
        window.location.href = `cat.html?cat=${this.innerHTML}`
    });
    cat_card[i].addEventListener('click',function(){
        window.location.href = `cat.html?cat=${this.querySelector('p').innerHTML}`
    });
}



