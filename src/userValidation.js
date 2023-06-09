

export function userValidation(userIsSignedIn) {

    const path = window.location.pathname
    const isHome = path === '/'
    const isCatalog = path.includes('catalog')
    const isLogIn = path.includes('login')
    const isSignUp = path.includes('sign-up')
    const isProducts = path.includes('about')
    const isAddProducts = path.includes('add-product')
    const isUserProfile = path.includes('user-profile')
    const isCart = path.includes('shop-cart-products')

    console.log(path)
    console.log(window.location)
    if (!userIsSignedIn) {
        if (isCatalog) {
            window.location.replace('/login/')
        }
        if (isProducts) {
            window.location.replace('/login/')
        }
        if (window.location === '') {
            window.location.replace('/login/')
        }
        if (isUserProfile) {
            window.location.replace('/login/')
        }
        if (isCart) {
            window.location.replace('/login/')
        }
        if (isAddProducts) {
            window.location.replace('/login/')
        }
    } 
}

export function adminAccess(isAdmin) {
    const path = window.location.pathname
    const isHome = path === '/'
    const isCatalog = path.includes('catalog')
    const isLogIn = path.includes('login')
    const isSignUp = path.includes('sign-up')
    const isProducts = path.includes('about')
    const isAddProducts = path.includes('add-product')
    const isUserProfile = path.includes('user-profile')
    const isCart = path.includes('shop-cart-products')
    if (!isAdmin) {
        if (isLogIn) {
            window.location.replace('/')
        }
        if (isSignUp) {
            window.location.replace('/')
        }
        if (isAddProducts) {
            window.location.replace('/')
        }
    } else if (isAdmin) {
        if (isLogIn) {
            window.location.replace('/')
        }
        if (isSignUp) {
            window.location.replace('/')
        }
    }
}