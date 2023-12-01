const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const rId = urlParams.get('rId');
const cat = urlParams.get('cat');

var recipe=''
var HTTPrequest = new XMLHttpRequest;
HTTPrequest.open('GET',`https://forkify-api.herokuapp.com/api/get?rId=${rId}`);
HTTPrequest.send();
HTTPrequest.onreadystatechange = function(){
    if(HTTPrequest.readyState == 4){
        recipe = JSON.parse(HTTPrequest.response).recipe;
        myfun();
    }
    
}
var current_recepie = document.querySelector('.current-recepie');
var recipe_card = document.querySelector('.recipe .container');
function myfun(){
    current_recepie.innerHTML=cat;
    current_recepie.setAttribute('href',`cat.html?cat=${cat}`);
    recipe_card.innerHTML= `
    <h2 class="mb-5">${recipe.title}</h2>
    <img src="${recipe.image_url}" alt=""class="mb-5 img-fluid">
    <h3>ingredients</h3>
    <ul class="mb-5">${get_ingredients()}</ul>
    <h4 class="fs-6 mb-5">publisher: ${recipe.publisher}</h4>
    <a class="btn btn-primary" href="${recipe.source_url}">Go to Source URL</a>
</div>`;
}

function get_ingredients(){
    var ingredients='';
    for(var i=0;i<recipe.ingredients.length;i++){
        ingredients+=`
        <li>${recipe.ingredients[i]}</li>
        `;
    }
    return ingredients;
}



