var removeCartItemButton = document.getElementsByClassName('delete-button')
console.log(removeCartItemButton)

for (var i=0;i<removeCartItemButton.length;i++){
    var button=removeCartItemButton[i]
    button.addEventListener('click',function(){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        console.log(button)
        updateCartTotal()
    })
}

function updateCartTotal(){
    var CartItemContainer = document.getElementsByClassName('cart-items')[0]
    var Items = CartItemContainer.getElementsByClassName('cart-items')
    for (var i=0;i<Items.length;i++){
        var Item = Items [i]
        var ItemPrice = Item.getElementsByClassName('item-price')
        var ItemQuantity = Item.getElementsByClassName('shoping-cart-container').getElementsByClassName('product-container').getElementsByClassName('item-quantity')[0]
        console.log(ItemPrice , ItemQuantity)
    }
}

// let cart = document.querySelector(".shoping-cart-container")

// function remove(){
//     var removeCartButton = document.getElementsByClassName('delete')
//     console.log("hi")
//     for ( var i=0;i<removeCartButton.length; i++ ){
//         var button =removeCartButton[i]
//         button.addEventListener('click', removeCartItem)
//     }
// }

// function removeCartItem(event){
//     var buttonClicked = event.target
//     buttonClicked.parentElement.remove()

// }