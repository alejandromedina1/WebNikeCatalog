import { describe, expect, it } from "vitest"
import "./card.js"
import {formatName} from "./card.js"

describe('Card', () => {
    it('renders the component and sets the params', () => {
        
        //Arange
        const name = 'Air Max 90'
        const category = 'this is the category'
        const price = '180'
        const url = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2005fa7c-c506-43f1-9448-a985c8cad07a/calzado-air-jordan-1-mid-b3js2D.png'

        const section = document.createElement('nike-card')

        //Act
        section.setAttribute('name', name)
        section.setAttribute('price', price)
        section.setAttribute('category', category)
        section.setAttribute('product_image', url)
        document.body.append(section)

        //Assert
        expect(section.querySelector('.product_title').textContent).toEqual(name)
        expect(section.querySelector('.product_price').textContent).toEqual('$' + price)
        expect(section.querySelector('.category_style').textContent).toEqual(category)
        expect(section.querySelector('img').src).toEqual(url)
    })

    it('sets the params', () => {
        
        //Arange
        const name = 'Air Max 90 Go'
        const category = 'Category'
        const price = '180'
        const url = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2005fa7c-c506-43f1-9448-a985c8cad07a/calzado-air-jordan-1-mid-b3js2D.png'

        const section = document.createElement('nike-card')

        //Act
        section.setAttribute('name', name)
        section.setAttribute('price', price)
        section.setAttribute('category', category)
        section.setAttribute('product_image', url)
        document.body.append(section)

        //Assert
        expect(section.querySelector('.product_title').textContent).toEqual(name)
        expect(section.querySelector('.product_price').textContent).toEqual('$' + price)
        expect(section.querySelector('.category_style').textContent).toEqual(category)
        expect(section.querySelector('img').src).toEqual(url)
    })
})