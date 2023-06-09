class NikeFooter extends HTMLElement {
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
        <section id="footer-section-resources">
        <figure>
            <img src="../../public/nike logo blanco.png" alt="" id="footer-logo">
        </figure>
        <ul class="options">
            <li>Gift Cards</li>
            <li>Promotions</li>
            <li>Find a Store</li>
            <li>Sign Up For Emails</li>
            <li>Become a Member</li>
            <li>Nike Journal</li>
        </ul>
        <ul class="resources">
            <li class="options">Get Help</li>
            <li>Order status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Gift Cards Balance</li>
        </ul>
        <ul class="resources">
            <li class="options">About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Purpose</li>
            <li>Sustainability</li>
        </ul>
        <ul class="resources">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
            <li>CA Supply Chains Act</li>
        </ul>
    </section>
    <section id="footer-section-mark">
        <hr>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
    </section>
        `;
    }

}



customElements.define('nike-footer', NikeFooter);
export default NikeFooter;