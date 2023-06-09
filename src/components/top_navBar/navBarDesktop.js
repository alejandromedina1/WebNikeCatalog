//import "/src/global.scss"


class NavBarDesktop extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        //console.log(`attr ${propName} changed`)
        this[propName] = newValue
        this.render()
    }

    render() {
        this.innerHTML = `
            <nav id="principal-menu">
            <a href="/" id="logo-img"><img src="../../public/nike logo blanco.png" height="30px" alt=""></a>
            <div id="list-menu">
                <ul>
                    <li>
                        <a href="main" class="nav-link active list-item">New & Featured</a>
                    </li>
                    <li>
                        <a href="/catalog/" class="nav-link list-item">Nike Air</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link list-item">Men</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link list-item">Women</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link list-item">Kids</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link list-item">Accessories</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link list-item">Sale</a>
                    </li>
                </ul>
            </div>
            <div id="search-nav">
                <input type="search" name="search" id="search-input">
                <a><span class="material-symbols-outlined">
                    favorite
                </span>
                </a>
                <a href="/shop-cart-products/"><span class="material-symbols-outlined">
                    shopping_cart
                </span>
                </a>
                <a href = "/login/"><span class="material-symbols-outlined">
                    account_circle
                </span>
                </a>
                <a href = '#' id ="log-out"><span class="material-symbols-outlined">
                    logout
                </span>
                </a>
            </div>
            </nav>
        `;
    }

}

window.addEventListener("scroll", function () {
    var header = this.document.getElementById("desktop-menu");
    header.classList.toggle("abajo", this.window.scrollY > 0);
})

customElements.define('top-nav-bar-desktop', NavBarDesktop);
export default NavBarDesktop;
