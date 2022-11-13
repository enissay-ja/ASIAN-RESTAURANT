// <--------------add-product-start-------------->

var table = JSON.parse(localStorage.getItem("itemsList"||[]));
//console.log(table)

var cartRow = document.getElementById('cart-items');
//console.log(cartRow);
const cartRowContents = document.createElement('div')

for( var i=0;i<table.length;i++){

    cartRowContents.innerHTML += `
    <div class="shoping-cart-container">
            <div class="product-container">
                <div class="product">

                    <div class="product-image">
                        <img src= "${table[i].Image}" alt="">
                    </div>

                    <div class="product-title">
                    <p>${table[i].Title}</p>
                    </div>

                </div>

                <div class="right-side">
                    <div class="unit-price">
                        <p class="item-price">${table[i].Price}</p>
                    </div>

                    <div class="quantity">
                    <div class="quantity-box">
                            <div class="minus-button">
                                <button>-</button>
                            </div>

                            <span id"quantity">${table[i].quantity}</span>

                            <div class="plus-button">
                                <button>+</button>
                            </div>
                    </div>
                    </div>


                    <div class="price">
                        <p>${table[i].itemsprice}</p>
                    </div>
                    <div class="delete delete-button">
                        <img  src="./Source/image/cart/trash.png" alt="" data-id="${table[i].index}">
                    </div>
                </div>

            </div>
            <hr>
        </div>`
    
  cartRow.appendChild(cartRowContents);
  updateCartTotal()

}

// <--------------add-product-end-------------->



// <-----------Button-Quantity-start-------------->


// <---------Button-Minus-start-------------->

MinusButton = document.querySelectorAll('.minus-button')

for (let i=0;i<MinusButton.length;i++){  
    
    MinusButton[i].addEventListener('click',() =>{
        if(table[i]['quantity']<=1){
            table[i]['quantity']=1;
        }else{
        table[i]['quantity']--;
        }
        table[i]['itemsprice']=table[i]['Price'].toString().replace("$","")*table[i]['quantity']
        table[i]['itemsprice'] = parseFloat( table[i]['itemsprice']).toFixed(2);
        localStorage.setItem("itemsList", JSON.stringify(table));
        history.go(0);
        updateCartTotal()
    })
}
// <-----------Button-Minus-end-------------->



// <---------Button-Plus-start-------------->

PlusButton = document.querySelectorAll('.plus-button')

for (let i=0;i<PlusButton.length;i++){  
    
    PlusButton[i].addEventListener('click',() =>{
        table[i]['quantity']++;
        table[i]['itemsprice']=table[i]['Price'].toString().replace("$","")*table[i]['quantity']
        table[i]['itemsprice'] = parseFloat( table[i]['itemsprice']).toFixed(2);
        localStorage.setItem("itemsList", JSON.stringify(table));
        history.go(0);
        
        updateCartTotal()
    })
}
// <-----------Button-Plus-end-------------->



// <--------------Button-Quantity-end-------------->




// <-----------delete-object-start-------------->

   var removeCartItemButton = document.getElementsByClassName('delete-button')

    for (var i=0;i<removeCartItemButton.length;i++){    
        var button=removeCartItemButton[i]
        
        button.addEventListener('click',function(e){
            var buttonClicked = event.target
            let index = e.target.dataset.id;
            buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();

            table.forEach((e,i) => {
                if(e.index==index){
                    table.splice(i,1);
                }
            });
            localStorage.setItem("itemsList", JSON.stringify(table));
            
            updateCartTotal()
        })
    }

// <--------------delete object end---------------->





// <---------------total-price-start--------------->
function updateCartTotal() {
let total = 0;      
    const price = document.querySelectorAll('.item-price');
    for(var i=0; i<price.length;i++){
      const realPrice = [];
      const quantity = [];
      quantity[i]=table[i].quantity;
      realPrice[i]= table[i].Price.toString().replace("$","");
      total= total+ (Number(quantity[i])*Number(realPrice[i]));
    }
    document.getElementById("total-price").innerHTML =parseFloat(total).toFixed(2);
}


// <---------------total-price-end----------------->
