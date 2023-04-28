import "./components/product_details/product.js"
const urlParams = new URLSearchParams(location.search)


const shoeName = urlParams.get('name')

function formatName(name = '') {
    const noCharacters = name.replace(/[^\w\s]/gi, '')
    const noSpaces = noCharacters.replace(/ /g, '-')
    return noSpaces.toLowerCase()
}

async function getData() {
    const message = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }
    const API = await fetch('https://64207a7425cb6572104a3f53.mockapi.io/catalog', message)
    const data = await API.json()
    console.log(data)
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
    console.log(currentShoe.color[0].toLowerCase())

    const colorContainer = product.shadowRoot.getElementById('product-colors')
    for (let index = 0; index < currentShoe.color.length; index++) {
        let buttonElement = document.createElement('button')

        buttonElement.style.backgroundColor = currentShoe.color[index];
        buttonElement.style.width = "40px";
        buttonElement.style.height = "40px";
        buttonElement.style.margin = "5px";
        buttonElement.style.border = "1px solid #A3A3A3";
        buttonElement.style.borderRadius = "100px";

        console.log(buttonElement)

        colorContainer.append(buttonElement)

    }
}

function updateItem(item, key, value) {
    item[key] = value
    item.setAttribute(key, value)
}

window.addEventListener("scroll", function () {
    var header = this.document.getElementById("desktop-menu");
    header.classList.toggle("abajo", this.window.scrollY>0);
})

window.addEventListener("scroll", function () {
    var header = this.document.getElementById("mobile-menu");
    header.classList.toggle("abajo", this.window.scrollY>0);
})