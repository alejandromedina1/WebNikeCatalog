import '../components/card/style.scss'
import { getShoes } from '../firebase'
import '../components/card/card.js'

let shoesList = []
await retrieveShoes()

let menu = document.getElementById('desktop-menu');
menu.style.backgroundColor = '#1e1e1e'

async function retrieveShoes() {
    shoesList = await getShoes()
}

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

let filteredShoes = shoesList;

const cardsContainer = document.querySelector('#shoes-container')

const categoryFilters = document.querySelectorAll('#target a');

const collectionFilters = document.querySelectorAll('#collection a');

const priceFilterLtH = document.querySelector('#low_to_high');

const priceFilterHtL = document.querySelector('#high_to_low');

const colorFilters = document.querySelectorAll('#color button');

renderShoes('All');

function detectarDispositivo() {
    var patronesMoviles = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

    var userAgent = navigator.userAgent;

    for (var i = 0; i < patronesMoviles.length; i++) {
        if (userAgent.match(patronesMoviles[i])) {
            return "mobile";
        }
    }

    return "desktop";
}

var tipoDispositivo = detectarDispositivo();

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

if (tipoDispositivo === "desktop") {
    categoryFilters.forEach(filter => filter.addEventListener('click', () => setCategory(filter)))
    collectionFilters.forEach(filter => filter.addEventListener('click', () => setCollection(filter)))
    priceFilterLtH.addEventListener('click', () => renderShoesLowToHigh());
    priceFilterHtL.addEventListener('click', () => renderShoesHighToLow());
    colorFilters.forEach(filter => filter.addEventListener('click', () => setColor(filter)))

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

    
} else {

    window.addEventListener("scroll", function () {
        var header = this.document.getElementById("categories");
        let scrollTop = this.document.documentElement.scrollTop;
        if (header.offsetTop < scrollTop) {
            header.style.marginTop = '0';
        } else {
            header.style.marginTop = '100px';
        }
    })
   
    const categoryFiltersMobile = document.getElementById('target-mobile');
    categoryFiltersMobile.addEventListener('change', () => setCategory(categoryFiltersMobile.value))
    
    const categoryCollectionMobile = document.getElementById('collection-mobile');
    categoryCollectionMobile.addEventListener('change', () => setCollection(categoryCollectionMobile.value))

    const categoryPriceMobile = document.getElementById('price-mobile');
    categoryPriceMobile.addEventListener('change', () => setPrice(categoryPriceMobile.value))

    const categoryColorMobile = document.getElementById('colors-mobile');
    categoryColorMobile.addEventListener('change', () => setColor(categoryColorMobile.value))


    function setCategory(event) {
        renderShoes(event);
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
        const collection = event;
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

    function setPrice(event) {
        const price = event;
        if (price == 'Lowest to Highest') {
            renderShoesLowToHigh()
        } else if (price == 'Highest to Lowest') {
            renderShoesHighToLow();
        }
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
        const color = event
        renderShoesColors(color);
    }
}