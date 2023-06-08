import { getShoes } from '../firebase'
import "../shopping-cart/shopping-cart.js"
import "../about/about.js"
import "../components/card/card.js"
import { doc } from 'firebase/firestore';

let menu = document.getElementById('desktop-menu');
menu.style.backgroundColor = '#1e1e1e'
menu.style.position = 'fixed'
let listOfShoes = await getData()

let addedToCart = [];

const addedToCartContainer = document.getElementById('added-to-cart')
const addToCart = document.getElementById('shopping_cart_button')
const currentShoe = listOfShoes.find((shoe) => (shoeName === formatName(shoe.name)))

console.log(listOfShoes)
/*
addToCart.addEventListener('click', () => console.log("click"))*/
renderToCart()

function formatName(name = '') {
    const noCharacters = name.replace(/[^\w\s]/gi, '')
    const noSpaces = noCharacters.replace(/ /g, '-')
    return noSpaces.toLowerCase()
}

async function getData() {
    const data = await getShoes()
    return data
}

function renderToCart(){
    
    addToCart.forEach(btn =>{
        
            btn.addEventListener('click', () => {
            addedToCart.push(currentShoe)
            renderDetails(currentShoe)
            console.log(currentShoe)
        })
    })
}


function renderDetails(currentShoe) {
    addedToCartContainer.innerHTML = ''
    addedToCart.forEach(currentShoe => {
        const product = document.createElement('added-product')
        updateItem(product, 'name', currentShoe.name)
        updateItem(product, 'description', currentShoe.description)
        updateItem(product, 'category', currentShoe.category)
        updateItem(product, 'collection', currentShoe.collection)
        updateItem(product, 'price', currentShoe.price)
        updateItem(product, 'colors', currentShoe.color)
        updateItem(product, 'url', currentShoe.urlImage)
        addedToCartContainer.append(product)
        });
}



function updateItem(item, key, value) {
    item[key] = value
    item.setAttribute(key, value)
}

