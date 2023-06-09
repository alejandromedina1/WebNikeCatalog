import '../global.scss'
import { addShoesWithId ,logOut } from '../firebase' 

const nameInput = document.getElementById('name-input')
const collectionInput = document.getElementById('collection-input')
const categoryInput = document.getElementById('category-input')
const descriptionInput = document.getElementById('description-input')
const colorsInput = document.getElementById('colors-input')
const priceInput = document.getElementById('price-input')
const inputFile = document.getElementById('image-input')
const addButton = document.getElementById('add-product')

let menu = document.getElementById('desktop-menu');
menu.style.backgroundColor = '#1e1e1e'

const logOutButton = document.getElementById('log-out')
logOutButton.addEventListener('click',() => logOut())
addButton.addEventListener('click', (e) => uploadProduct(e))

async function uploadProduct(e) {
    e.preventDefault()

    const file = inputFile.files[0]
    const colors = catchColors()

    const newObj = {
        category: categoryInput.value,
        collection: collectionInput.value,
        color: colors,
        description: descriptionInput.value,
        name: nameInput.value,
        price: priceInput.value,
        date: Date.now()
    }

    const id = newObj.name.toLowerCase().replace(/ /g, '-')

    console.log('will write object ', newObj)

    // await addProduct(newObj)
    await addShoesWithId(newObj, id, file)
}

function catchColors() {
    const colorArray = colorsInput.value.split(' ')
    return colorArray
}