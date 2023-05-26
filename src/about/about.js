import "../components/product_details/product.js"
import { getShoes } from '../firebase'
const urlParams = new URLSearchParams(location.search)

let menu = document.getElementById('desktop-menu');
menu.style.backgroundColor = '#1e1e1e'

const shoeName = urlParams.get('name')

function formatName(name = '') {
    const noCharacters = name.replace(/[^\w\s]/gi, '')
    const noSpaces = noCharacters.replace(/ /g, '-')
    return noSpaces.toLowerCase()
}

async function getData() {
    const data = await getShoes()
    return data
}

const listOfShoes = await getData()

const currentShoe = listOfShoes.find((shoe) => (shoeName === formatName(shoe.name)))

console.log(currentShoe)

const detailContainer = document.getElementById('details-container')

renderDetails()

function renderDetails() {
    detailContainer.innerHTML = ''

    const product = document.createElement('nike-product')
    updateItem(product, 'name', currentShoe.name)
    updateItem(product, 'description', currentShoe.description)
    updateItem(product, 'category', currentShoe.category)
    updateItem(product, 'collection', currentShoe.collection)
    updateItem(product, 'price', currentShoe.price)
    updateItem(product, 'colors', currentShoe.color)
    updateItem(product, 'url', currentShoe.urlImage)
    detailContainer.append(product)

    

    const colorContainer = document.getElementById('product-colors')
    for (let index = 0; index < currentShoe.color.length; index++) {
        let buttonElement = document.createElement('button')

        buttonElement.style.backgroundColor = currentShoe.color[index];
        buttonElement.style.width = "40px";
        buttonElement.style.height = "40px";
        buttonElement.style.margin = "5px";
        buttonElement.style.border = "1px solid #A3A3A3";
        buttonElement.style.borderRadius = "100px";

        colorContainer.append(buttonElement)

    }
    sizeButtons()
    starRating()
}

function sizeButtons () {
    const product = document.querySelector('nike-product')
    console.log(product)
    
    const tallaBtns = document.querySelectorAll('.talla-btn');
    tallaBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          console.log('hola')

        tallaBtns.forEach(btn => {
          btn.classList.remove('selected');
        });

        btn.classList.add('selected');
      });
    });
}

function starRating() {
    const product = document.querySelector('nike-product')
    const stars = document.querySelectorAll('.stars');
      stars.forEach(function(star, index) {
        star.addEventListener('mouseover', function() {
          for (let i = 0; i <= index; i++) {
            stars[i].classList.add('selected');
          }
        });

        star.addEventListener('mouseout', function() {
          stars.forEach(function(star) {
            star.classList.remove('selected');
          });
        });

        star.addEventListener('click', function() {
          stars.forEach(function(star, i) {
            if (i <= index) {
              star.classList.add('selected');
            } else {
              star.classList.remove('selected');
            }
          });

          const mensaje = document.querySelector('#mensaje');
          mensaje.textContent = '¡Thank you!';
        });
      });

}



function updateItem(item, key, value) {
    item[key] = value
    item.setAttribute(key, value)
}

window.addEventListener("scroll", function () {
    var header = this.document.getElementById("desktop-menu");
    header.classList.toggle("abajo", this.window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var header = this.document.getElementById("mobile-menu");
    header.classList.toggle("abajo", this.window.scrollY > 0);
})