

export function userValidation(userIsSignedIn) {

    const path = window.location.pathname
    const isHome = path === '/'
    const isCatalog = path.includes('catalog')
    const isLogIn = path.includes('login')
    const isSignUp = path.includes('sign-up')
    const isAddProducts = path.includes('add-products')
    const isProducts = path.includes('about')

    console.log(path)
    if (!userIsSignedIn) {
        if (isCatalog) {
            window.location.replace('/login/')
        }
        if (isAddProducts) {
            window.location.replace('/login/')
        }
        if (isProducts) {
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
    const isAddProducts = path.includes('add-products')
    const isProducts = path.includes('about')
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