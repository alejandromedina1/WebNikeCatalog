class Card extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.name = this.getAttribute('name')
        this.product_image = this.getAttribute('product_image')
        this.description = this.getAttribute('description')
        this.category = this.getAttribute('category')
        this.collection = this.getAttribute('collection')
        this.colors = this.getAttribute('color')
        this.price = this.getAttribute('price')
    }

    static get observedAttributes() {
        return ['name', 'product_image', 'description', 'category', 'collection', 'colors', 'price']
    }

    formatName(name = '') {
        const noCharacters = name.replace(/[^\w\s]/gi, '')
        const noSpaces = noCharacters.replace(/ /g, '-')
        return noSpaces.toLowerCase()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "/src/components/card/style.css">
        <article class="product">
            <span class="product_price">$${this.price}</span>
        <div id="info_card">
            <img class="product_image" src="${this.product_image}">
            <h1 class="product_title">${this.name}</h1>
            <hr />
            <h3 class="category_style">${this.category}</h3>
            <a href="/details/?name=${this.formatName(this.name)}" class="product_btn btn">SEE MORE</a>
        </div>
        </article>
        `
    }
    connectedCallback() {
        this.render()
    }
    
    attributeChangedCallback(propName, oldValue, newValue) {
        //console.log(`attr ${propName} changed`)
        this[propName] = newValue
        this.render
    }
}

customElements.define('nike-card', Card)
export default Card;