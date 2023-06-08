import "../components/card/card.js"
import {getProductsFromCart} from "../firebase.js"
import '../components/shopping-cart/shopping-cart.js'

let menu = document.getElementById('desktop-menu');
menu.style.backgroundColor = '#1e1e1e'
menu.style.position = 'fixed'


async function retrieveShoes() {
    shoesList = await getProductsFromCart()
}

let shoesList = []
await retrieveShoes()

console.log(shoesList[0])

const cartSection = document.getElementById('added-to-cart')
console.log(cartSection)

renderShoes()

function renderShoes() {
    cartSection.innerHTML = ''

    shoesList.forEach(shoe => {
        const nikeShoe = document.createElement('added-product')

        nikeShoe.setAttribute('name', shoe.name)
        nikeShoe.setAttribute('price', shoe.price)
        nikeShoe.setAttribute('collection', shoe.collection)
        nikeShoe.setAttribute('category', shoe.category)
        nikeShoe.setAttribute('url', shoe.urlImage)

        cartSection.append(nikeShoe)
    })

    
}


