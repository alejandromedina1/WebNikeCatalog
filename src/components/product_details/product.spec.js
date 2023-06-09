import { describe, expect, it } from "vitest"
import "./product.js"

describe('Product', () => {
    it('renders the component and sets the params', () => {
        
        //Arange
        const name = 'Air Max 90'
        const description = 'This is the description from the product'
        const category = 'this is the category'
        const collection = 'this is the collection'
        const price = '180'
        const url = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2005fa7c-c506-43f1-9448-a985c8cad07a/calzado-air-jordan-1-mid-b3js2D.png'

        const section = document.createElement('nike-product')

        //Act
        section.setAttribute('name', name)
        section.setAttribute('description', description)
        section.setAttribute('price', price)
        section.setAttribute('collection', collection)
        section.setAttribute('category', category)
        section.setAttribute('url', url)
        document.body.append(section)

        //Assert
        expect(section.querySelector('h1').textContent).toEqual(name)
        expect(section.querySelector('.paragraph-text').textContent).toEqual(description)
        expect(section.querySelector('h3').textContent).toEqual(price + '$')
        expect(section.querySelector('#collection').textContent).toEqual(collection)
        expect(section.querySelector('#category').textContent).toEqual(category)
        expect(section.querySelector('img').src).toEqual(url)
    })

    it('redirect back to the catalog page', () => {
        //Arange
        const name = 'Air Max 90'
        const description = 'This is the description from the product'
        const category = 'this is the category'
        const collection = 'this is the collection'
        const price = '180'
        const url = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2005fa7c-c506-43f1-9448-a985c8cad07a/calzado-air-jordan-1-mid-b3js2D.png'

        const section = document.createElement('nike-product')

        //Act
        section.setAttribute('name', name)
        section.setAttribute('description', description)
        section.setAttribute('price', price)
        section.setAttribute('collection', collection)
        section.setAttribute('category', category)
        section.setAttribute('url', url)
        document.body.append(section)

        //Assert
        expect(section.querySelector('a').href).toEqual(window.location + 'catalog/')

        
    })
})