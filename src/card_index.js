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

async function getData(){
    const message = {
        method: 'GET',
        headers: {
            'content-type':'application/json'
        }
    }
    const API = await fetch('https://64207a7425cb6572104a3f53.mockapi.io/catalog',message)
    const data = await API.json()
    console.log(data)
    return data
}

const shoesList = await getData();
const cardsContainer = document.getElementById('cards_container');
const categoryButtons = document.querySelectorAll('#categories a');

categoryButtons.forEach(btn => btn.addEventListener('click', ()=> setCategory(btn)))

console.log(Array.isArray(shoesList))
renderShoes(false);
function renderShoes(category){

    let filteredShoes= [];
    cardsContainer.innerHTML=''

    if (!category || category === 'All') {
        filteredShoes = shoesList;
    }else {
        filteredShoes = shoesList.filter(shoe => shoe.category === category)
    }
    console.log(filteredShoes)

    filteredShoes.forEach(shoe =>{
        const nikeShoe = document.createElement('nike-card')
        nikeShoe.setAttribute('name', shoe.name)
        nikeShoe.setAttribute('price', shoe.price)
        nikeShoe.setAttribute('product_image', shoe.urlImage)
        nikeShoe.setAttribute('category', shoe.category)
        nikeShoe.setAttribute('description', shoe.description)
        nikeShoe.setAttribute('colors', shoe.color)
        nikeShoe.setAttribute('description', shoe.description)
    
        cardsContainer.append(nikeShoe)
    });
}

function setCategory(event){
    const category = event.textContent
    console.log(event.textContent)
    renderShoes(category);
}