class NavBarMobile extends HTMLElement {
    constructor() {
        super()
    }
    
    connectedCallback() {
        this.render()
    }
    
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render()
    }

    render() {
        this.innerHTML= `
        <nav id="principal-menu" class="topnav">
        <a href="#" id="logo-img"><img src="./src/public/nike logo blanco.png" height="30px" alt=""></a>
        <div id="search-nav">
          <a><span class="material-symbols-outlined">
              search
            </span>
          </a>
          <a><span class="material-symbols-outlined">
              favorite
            </span>
          </a>
          <a><span class="material-symbols-outlined">
              shopping_cart
            </span>
          </a>
        </div>
        <div id="list-menu" class="dropdown">
          <a><span class="material-symbols-outlined" id="dropdown-btn">
              menu
            </span>
          </a>
          <div class="dropdown-content" id="my_topnav">
            <ul>
              <li>
                <a href="main" class="nav-link list-item">New & Featured</a>
              </li>
              <li>
                <a href="/catalog/" class="nav-link active list-item">Nike Air</a>
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
        </div>
      </nav>
        `;
        window.addEventListener("scroll", function () {
            var header = this.document.getElementById("mobile-menu");
            header.classList.toggle("abajo", this.window.scrollY>0);
        })
        
            
        let menuToggle = document.getElementById("dropdown-btn");
        menuToggle.addEventListener('click', function (){
            dropdown()
        })
        
        function dropdown() {
            let nav = document.getElementById("my_topnav");
            if (nav.className === "topnav") {
              nav.className += " dropdown-content";
            } else {
              nav.className = "topnav";
            }
        }
    }
}


customElements.define('top-nav-bar-mobile', NavBarMobile);
export default NavBarMobile;
