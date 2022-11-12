

let sushiClass1 = document.querySelector('.nigiri1');
let sidesClass1 = document.querySelector('.rolls1');
let soupClass1 = document.querySelector('.hand-roll-seaweed1');
let dessertsClass1 = document.querySelector('.hand-roll-soy-paper1');

let sushiClass = document.querySelector('.nigiri');
let sidesClass = document.querySelector('.rolls');
let soupClass = document.querySelector('.hand-roll-seaweed');
let dessertsClass = document.querySelector('.hand-roll-soy-paper');
var seeAllClass = document.querySelector('.seeAll');




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



const addtocart = document.querySelectorAll('.cart');
let table = JSON.parse(localStorage.getItem("itemsList"|| []));;
if(table == null) {
    table =[];
}
addtocart.forEach((elm,i) => {
    
    elm.addEventListener('click',()=>{
        const div = elm.parentElement.parentElement;
        const titre = div.querySelector('h3').innerHTML;
        const prix =  div.querySelector('section').innerHTML;
        const imgsrc = div.querySelector('img').currentSrc;
        const imgsrcfinal = imgsrc.replace("http://127.0.0.1:5500",".");
        const index = i;
        

        let itemsList = {
            Title: titre,
            Price: prix,
            Image: imgsrcfinal,
            index:i,
            quantity: 1
        }
        // table[i].quantity +=  1 ;
        

        table.push(itemsList)
        localStorage.setItem("itemsList", JSON.stringify(table));


        // totalquantity = 0;
        // var quantity =table[i].quantity.toString();
        // totalquantity=totalquantity+Number(quantity++); 
        // table[i].quantity= table[i].quantity+totalquantity;
        // localStorage.setItem("itemsList", JSON.stringify(table)); 
        // console.log(totalquantity)

        // for(let i = 0; i < table.length; i++){
        //     // console.log(i);
        //     // console.log("pause");
        //     // console.log(table[i].index);
        //     if(table[i].index === index){
        //          table[i].quantity +=  1 ;
        //     }
        //     else
        //     {
        //         table.push(itemsList)
        //          localStorage.setItem("itemsList", JSON.stringify(table));
        //     }
        // }
        




        

        // add_product();
        
        

    })
    
})


