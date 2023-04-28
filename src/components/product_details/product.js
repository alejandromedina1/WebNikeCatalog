class Product extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
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
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "/src/components/product_details/style.css">
        <article id = "product-details-container">
            <figure id = 'image-container'>
                <img src="${this.url}">
            </figure>
            <div id = 'text-details-container'>
                <a href = "../../../catalog.html"> 
                    <p>  < Back </p>
                </a>
                <div id = labels> 
                    <h4>${this.collection}</h4>
                    <h4> ${this.category}</h4>
                </div>
                <h1 id ="title"> ${this.name} </h1>
                <h3> ${this.price}$</h3>
                <p class = "paragraph-text"> ${this.description} </p>
                <h2> Select color</h2>
                <div id="product-colors"></div>
                <hr>
                <h2> Size</h2>
                <select id="size-input" name="size">
                    <option value="Select">Select</option>    
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                </select>
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