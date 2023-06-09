import "../components/card/card.js"
import {getProductsFromCart, deleteProductFromCart} from "../firebase.js"
import '../components/shopping-cart/shopping-cart.js'

let menu = document.getElementById('desktop-menu');
menu.style.backgroundColor = '#1e1e1e'
menu.style.position = 'fixed'


async function retrieveShoes() {
    shoesList = await getProductsFromCart()
}

let shoesList = []
await retrieveShoes()

console.log(shoesList)

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

await removeProduct()

async function removeProduct() {
    const crosses = document.querySelectorAll('.remove-item')
    console.log(crosses)
    
    crosses.forEach(cross => {
        cross.addEventListener('click', async ()=> {
            const array = Array.prototype.slice.call(crosses)
            const indexCross = array.indexOf(cross)
            console.log(indexCross)

            const productId = shoesList[indexCross].id
            console.log(productId)

            await deleteProductFromCart(productId)

            window.location.reload()

        })
    })

}



