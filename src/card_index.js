import "/src/components/card/card.js"

window.addEventListener("scroll", function () {
    var header = this.document.getElementById("categories");
    let scrollTop = this.document.documentElement.scrollTop;
    if (header.offsetTop < scrollTop) {
        header.style.marginTop = '0';
    } else {
        header.style.marginTop = '100px';
    }
})

let menuToggle = document.getElementById("dropdown-btn");
menuToggle.addEventListener('click', function () {
    dropdown()
})

function dropdown() {
    let nav = document.getElementById("my_topnav");
    if (nav.className === "topnavdrop") {
        nav.className += " dropdown-content";
    } else {
        nav.className = "topnavdrop";
    }
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

const shoesList = await getData();
let filteredShoes = shoesList;
const cardsContainer = document.getElementById('cards_container');
const categoryFilters = document.querySelectorAll('#target a');
categoryFilters.forEach(filter => filter.addEventListener('click', () => setCategory(filter)))

const collectionFilters = document.querySelectorAll('#collection a');
collectionFilters.forEach(filter => filter.addEventListener('click', () => setCollection(filter)))

const priceFilterLtH = document.querySelector('#low_to_high');
priceFilterLtH.addEventListener('click', () => renderShoesLowToHigh());

const priceFilterHtL = document.querySelector('#high_to_low');
priceFilterHtL.addEventListener('click', () => renderShoesHighToLow());

const colorFilters = document.querySelectorAll('#color button');
colorFilters.forEach(filter => filter.addEventListener('click', () => setColor(filter)))

console.log(Array.isArray(shoesList))
renderShoes('All');

function renderShoes(category) {


    cardsContainer.innerHTML = ''

    if (category === 'All') {
        filteredShoes = shoesList;
    } else {
        filteredShoes = filteredShoes.filter(shoe => shoe.category === category)
    }

    filteredShoes.forEach(shoe => {
        const nikeShoe = document.createElement('nike-card')
        nikeShoe.setAttribute('name', shoe.name)
        nikeShoe.setAttribute('price', shoe.price)
        nikeShoe.setAttribute('product_image', shoe.urlImage)
        nikeShoe.setAttribute('category', shoe.category)
        nikeShoe.setAttribute('colors', shoe.color)

        cardsContainer.append(nikeShoe)
    });
    activeLink()
}

function setCategory(event) {
    const category = event.textContent
    console.log(event.textContent)
    renderShoes(category);
}

function renderShoesCollection(collection) {


    cardsContainer.innerHTML = ''

    if (collection === 'All') {
        filteredShoes = shoesList;
    } else {
        filteredShoes = filteredShoes.filter(shoe => shoe.collection === collection)
    }

    filteredShoes.forEach(shoe => {
        const nikeShoe = document.createElement('nike-card')
        nikeShoe.setAttribute('name', shoe.name)
        nikeShoe.setAttribute('price', shoe.price)
        nikeShoe.setAttribute('product_image', shoe.urlImage)
        nikeShoe.setAttribute('category', shoe.category)
        nikeShoe.setAttribute('colors', shoe.color)

        cardsContainer.append(nikeShoe)
    });
}

function setCollection(event) {
    const collection = event.textContent
    console.log(event.textContent)
    renderShoesCollection(collection);
}

function renderShoesLowToHigh() {


    cardsContainer.innerHTML = ''
    filteredShoes = filteredShoes.sort(((a, b) => a.price - b.price))

    filteredShoes.forEach(shoe => {
        const nikeShoe = document.createElement('nike-card')
        nikeShoe.setAttribute('name', shoe.name)
        nikeShoe.setAttribute('price', shoe.price)
        nikeShoe.setAttribute('product_image', shoe.urlImage)
        nikeShoe.setAttribute('category', shoe.category)
        nikeShoe.setAttribute('colors', shoe.color)

        cardsContainer.append(nikeShoe)
    });
}

function renderShoesHighToLow() {


    cardsContainer.innerHTML = ''
    filteredShoes = filteredShoes.sort(((a, b) => b.price - a.price))

    filteredShoes.forEach(shoe => {
        const nikeShoe = document.createElement('nike-card')
        nikeShoe.setAttribute('name', shoe.name)
        nikeShoe.setAttribute('price', shoe.price)
        nikeShoe.setAttribute('product_image', shoe.urlImage)
        nikeShoe.setAttribute('category', shoe.category)
        nikeShoe.setAttribute('colors', shoe.color)

        cardsContainer.append(nikeShoe)
    });
}

function renderShoesColors(color) {


    cardsContainer.innerHTML = ''

    if (color === 'All') {
        filteredShoes = shoesList;
    } else {
        filteredShoes = filteredShoes.filter(shoe => shoe.color.includes(color) === true)
    }

    console.log(filteredShoes)

    filteredShoes.forEach(shoe => {
        const nikeShoe = document.createElement('nike-card')
        nikeShoe.setAttribute('name', shoe.name)
        nikeShoe.setAttribute('price', shoe.price)
        nikeShoe.setAttribute('product_image', shoe.urlImage)
        nikeShoe.setAttribute('category', shoe.category)
        nikeShoe.setAttribute('colors', shoe.color)

        cardsContainer.append(nikeShoe)
    });
}

function setColor(event) {
    const color = event.textContent
    console.log(event.textContent)
    renderShoesColors(color);
}

function activeLink() {
    let filters = document.querySelectorAll('.show');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(element => {
                element.classList.remove('active')

            });

            filter.classList.add('active')
        })
    });

}
