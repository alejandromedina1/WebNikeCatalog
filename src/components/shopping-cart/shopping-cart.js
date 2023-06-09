class Shopping_cart extends HTMLElement {
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
                <div id = labels> 
                    <h4>${this.collection}</h4>
                    <h4> ${this.category}</h4>
                </div>
                <h1 id ="title"> ${this.name} </h1>
                <h3 class = "prices"> ${this.price}$</h3>
            </div>
            <h5 class="remove-item"> X </h5>
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

customElements.define('added-product', Shopping_cart)
export default Shopping_cart