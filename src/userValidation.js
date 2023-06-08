

export function userValidation(userIsSignedIn) {

    const path = window.location.pathname
    const isHome = path === '/'
    const isCatalog = path.includes('catalog')
    const isLogIn = path.includes('login')
    const isSignUp = path.includes('sign-up')
    const isProducts = path.includes('about')
    const isAdminProfile = path.includes('admin-profile')
    const isUserProfile = path.includes('user-profile')
    const isCart = path.includes('shop-cart-products')

    console.log(path)
    if (!userIsSignedIn) {
        if (isCatalog) {
            window.location.replace('/login/')
        }
        if (isProducts) {
            window.location.replace('/login/')
        }
        if (isAdminProfile) {
            window.location.replace('/login/')
        }
        if (isUserProfile) {
            window.location.replace('/login/')
        }
        if (isCart) {
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
    const isAdminProfile = path.includes('admin-profile')
    const isUserProfile = path.includes('user-profile')
    const isCart = path.includes('shop-cart-products')
    if (!isAdmin) {
        if (isLogIn) {
            window.location.replace('/')
        }
        if (isSignUp) {
            window.location.replace('/')
        }
        if (isAdminProfile) {
            window.location.replace('/user-profile/')
        }
    } else if (isAdmin) {
        if (isLogIn) {
            window.location.replace('/')
        }
        if (isSignUp) {
            window.location.replace('/')
        }
        if (isUserProfile) {
            window.location.replace('/admin-profile')
        }
    }
}