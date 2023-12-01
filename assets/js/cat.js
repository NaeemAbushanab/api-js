var cat_nav = document.querySelectorAll('.nav-link');
for(var i=0;i<cat_nav.length;i++){
    cat_nav[i].addEventListener('click',function(){
        window.location.href = `cat.html?cat=${this.innerHTML}`
    })
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cat = urlParams.get('cat');
for(var i=0;i<cat_nav.length;i++){
    if(cat == cat_nav[i].innerHTML){
        cat_nav[i].classList.add('active');
    }
}

var recipes=''
var HTTPrequest = new XMLHttpRequest;
HTTPrequest.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${cat}`);
HTTPrequest.send();
HTTPrequest.onreadystatechange = function(){
    if(HTTPrequest.readyState == 4){
        recipes = JSON.parse(HTTPrequest.response).recipes;
        myfun();
    }
    
}
var recipes_card = document.querySelector('.recipes .container');
function myfun(){
    var data = '';
    for(var i=0;i<recipes.length;i++){
        data += `
        <div class="card" style="width: 18rem;">
            <img src="${recipes[i].image_url}" class="card-img-top " alt="${recipes[i].title}" style='max-height:190px;object-fit:contain;'>
            <div class="card-body position-relative">
                <h5 class="card-title mb-5">${recipes[i].title}</h5>
            <a href="recipe.html?cat=${cat}&rId=${recipes[i].recipe_id}" class="btn btn-primary position-absolute left-0" style=' bottom:10px'>Read More</a>
            </div>
            <div class="card-footer text-body-secondary">
                publisher: ${recipes[i].publisher}
            </div>
        </div>
        `;
    }
    recipes_card.innerHTML = data
}
