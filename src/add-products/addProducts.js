import '../global.scss'
import { getProdcuts, addProduct, addProductWithId, logOut } from '../firebase' 

const nameInput = document.getElementById('name-input')
const collectionInput = document.getElementById('collection-input')
const categoryInput = document.getElementById('category-input')
const descriptionInput = document.getElementById('description-input')
const colorsInput = document.getElementById('colors-input')
const priceInput = document.getElementById('price-input')
const imageFile = document.getElementById('name-input')
const addButton = document.getElementById('add-product')

const logOutButton = document.getElementById('log-out')
logOutButton.addEventListener('click',() => logOut())