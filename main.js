
let sushiClass1 = document.querySelector('.nigiri1');
let sidesClass1 = document.querySelector('.rolls1');
let soupClass1 = document.querySelector('.hand-roll-seaweed1');
let dessertsClass1 = document.querySelector('.hand-roll-soy-paper1');

let sushiClass = document.querySelector('.nigiri');
let sidesClass = document.querySelector('.rolls');
let soupClass = document.querySelector('.hand-roll-seaweed');
let dessertsClass = document.querySelector('.hand-roll-soy-paper');
let seeAllClass = document.querySelector('.seeAll');


seeAllClass.addEventListener('click',function(){
    sushiClass1.style.display="block";
    sidesClass1.style.display="block";
    soupClass1.style.display="block";
    dessertsClass1.style.display="block";

    sushiClass.style.display="flex";
    sidesClass.style.display="flex";
    soupClass.style.display="flex";
    dessertsClass.style.display="flex";
})


sushi.addEventListener('click',function(){
    sushiClass1.style.display="block";
    sidesClass1.style.display="none";
    soupClass1.style.display="none";
    dessertsClass1.style.display="none";

    sushiClass.style.display="flex";
    sidesClass.style.display="none";
    soupClass.style.display="none";
    dessertsClass.style.display="none";

})

sides.addEventListener('click',function(){
    sushiClass1.style.display="none";
    sidesClass1.style.display="block";
    soupClass1.style.display="none";
    dessertsClass1.style.display="none";

    sushiClass.style.display="none";
    sidesClass.style.display="flex";
    soupClass.style.display="none";
    dessertsClass.style.display="none";
})

soup.addEventListener('click',function(){
    sushiClass1.style.display="none";
    sidesClass1.style.display="none";
    soupClass1.style.display="block";
    dessertsClass1.style.display="none";

    sushiClass.style.display="none";
    sidesClass.style.display="none";
    soupClass.style.display="flex";
    dessertsClass.style.display="none";
})

desserts.addEventListener('click',function(){
    sushiClass1.style.display="none";
    sidesClass1.style.display="none";
    soupClass1.style.display="none";
    dessertsClass1.style.display="block";

    sushiClass.style.display="none";
    sidesClass.style.display="none";
    soupClass.style.display="none";
    dessertsClass.style.display="flex";
})



