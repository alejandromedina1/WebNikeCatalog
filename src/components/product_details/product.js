class Product extends HTMLElement {
    constructor() {
        super()
        this.name = this.getAttribute('name')
        this.url = this.getAttribute('url')
        this.description = this.getAttribute('description')
        this.category = this.getAttribute('category')
        this.collection = this.getAttribute('collection')
        this.colors = this.getAttribute('color')
        this.price = this.getAttribute('price')

    }
    static get observedAttributes() {
        return ['name', 'url', 'description', 'category', 'collection', 'colors', 'price']
    }
    render() {
        this.innerHTML = `
        <article id = "product-details-container">
            <figure id = 'image-container'>
                <img id = "product-highlighted-image" src="${this.url}">
            </figure>
            <div id = 'text-details-container'>
                <a href = "/catalog/"> 
                    <p>  < Back </p>
                </a>
                <div id = labels> 
                    <h4>${this.collection}</h4>
                    <h4> ${this.category}</h4>
                </div>
                <h1 id ="title"> ${this.name} </h1>
                <h3 class = "prices"> ${this.price}$</h3>
                <p class = "paragraph-text"> ${this.description} </p>
                <h2> Item Colors </h2>
                <div id="product-colors"></div>
                <hr>
                <h2> Size</h2>
                <div id="size-btns">
                    <button class="talla-btn" id="talla-1">37</button>
                    <button class="talla-btn" id="talla-2">38</button>
                    <button class="talla-btn" id="talla-3">39</button>
                    <button class="talla-btn" id="talla-4">40</button>
                    <button class="talla-btn" id="talla-5">41</button>    
                </div>
                <hr>
                <h2> Rate this product</h2>
                <div>
                    <span class="stars" id="star1">&#9733;</span>
                    <span class="stars" id="star2">&#9733;</span>
                    <span class="stars" id="star3">&#9733;</span>
                    <span class="stars" id="star4">&#9733;</span>
                    <span class="stars" id="star5">&#9733;</span>
                    <span class="mensaje" id="mensaje"></span>
                </div>
                <hr>
                <button id = 'add-to-cart' > Add to Cart </button>
        </article>
        `
        console.log(this.url)
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        console.log(`attr ${propName} changed`)
        this[propName] = newValue
        this.render
    }
}

customElements.define('nike-product', Product)
export default Product