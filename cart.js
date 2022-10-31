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
                        <img src="${table[i].Image}" alt="">
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
                            <div class="quantity-button">
                                <button>-</button>
                            </div>

                            <p>1</p>

                            <div class="quantity-button">
                                <button>+</button>
                            </div>
                    </div>
                    </div>


                    <div class="price">
                        <p>$ 1.6</p>
                    </div>
                    <div class="delete delete-button">
                        <img src="./Source/image/cart/trash.png" alt="">
                    </div>
                </div>

            </div>
            <hr>
        </div>`
    
  cartRow.appendChild(cartRowContents);

}

// <--------------add-product-end-------------->




// <-----------delete-object-start-------------->

   var removeCartItemButton = document.getElementsByClassName('delete-button')

for (var i=0;i<removeCartItemButton.length;i++){    
    var button=removeCartItemButton[i]
    button.addEventListener('click',function(){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();

        let butonindex = buttonClicked.indexOf(i)

        var table = JSON.parse(localStorage.getItem("itemsList"||[]));
        console.log(i,butonindex )


    
        
        // updateCartTotal()
    })
}

// <--------------delete object end---------------->





// <---------------total-price-start--------------->
let total = 0;  

 const addtocart = document.querySelectorAll('.item-price');

for (var i=0;i<addtocart.length;i++){
    
    const price = document.querySelectorAll('.item-price');
    for(var i=0; i<price.length;i++){
      const realPrice = [];
      realPrice[i]= price[i].toString().replace("$","");
      //console.log(realPrice)
    }
    
    // const price1 = price.replace("$","");
    // console.log(price1[i].innerHTML)
    //console.log(realPrice)


    // const price = div.querySelector('p').innerHTML;
    // console.log(price)
    //var button=removeCartItemButton[i]
    //button.addEventListener('click',function(){
       // var buttonClicked = event.target
    
        
        // updateCartTotal()
    }
//}



// <---------------total-price-end----------------->











    // const title_place=document.getElementById('title')
    // document.getElementById('title').textContent = title;
    // document.getElementById('price').textContent = price;

    // title_place.insertAdjacentText("afterend", title);



    // function displayCart() {
    //     let cartItems = localStorage.getItem('productsInCart');
    //     cartItems = JSON.parse(cartItems);
    
    //     let cart = localStorage.getItem("totalCost");
    //     cart = parseInt(cart);
    
    //     let productContainer = document.querySelector('.products');
        
    //     if( cartItems && productContainer ) {
    //         productContainer.innerHTML = '';
    //         Object.values(cartItems).map( (item, index) => {
    //             productContainer.innerHTML += 
    //             `<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./images/${item.tag}.jpg" />
    //                 <span class="sm-hide">${item.name}</span>
    //             </div>
    //             <div class="price sm-hide">$${item.price},00</div>
    //             <div class="quantity">
    //                 <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
    //                     <span>${item.inCart}</span>
    //                 <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
    //             </div>
    //             <div class="total">$${item.inCart * item.price},00</div>`;
    //         });



    
            // productContainer.innerHTML += `
            //     <div class="basketTotalContainer">
            //         <h4 class="basketTotalTitle">Basket Total</h4>
            //         <h4 class="basketTotal">$${cart},00</h4>
            //     </div>`
    
    //         deleteButtons();
    //         manageQuantity();
    //     }
    // }










// function updateCartTotal(){
//     var CartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var Items = CartItemContainer.getElementsByClassName('cart-items')
//     for (var i=0;i<Items.length;i++){
//         var Item = Items [i]
//         var ItemPrice = Item.getElementsByClassName('item-price')
//         var ItemQuantity = Item.getElementsByClassName('shoping-cart-container').getElementsByClassName('product-container').getElementsByClassName('item-quantity')[0]
//         console.log(ItemPrice , ItemQuantity)
//     }
// }    