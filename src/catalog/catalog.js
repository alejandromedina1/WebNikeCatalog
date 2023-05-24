import '../components/card/style.scss'
import { getShoes } from '../firebase'

let shoes = []
await retrieveShoes()
renderShoes()


async function retrieveShoes() {
    shoes = await getShoes()
}

function renderShoes() {
    const container = document.querySelector('#shoes-container')

    shoes.forEach((product) => {
        const elem = document.createElement('article')
        elem.className = 'product'
        elem.innerHTML=`
        <span class="product_price">$${product.price}</span>
            <div id="info_card">
                <img class="product_image" src="${product.urlImage}">
                <h1 class="product_title">${product.name}</h1>
                <hr />
                <h3 class="category_style">${product.category}</h3>
                <a href="#" class="product_btn btn">SEE MORE</a>
            </div>   
        `
        container.append(elem)
    })

}