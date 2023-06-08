const routes = [{
        path: '/',
        requiresAuth: true
    },
    {
        path: '/catalog/',
        requiresAuth: true
    },
    {
        path: '/logIn/',
        requiresAuth: false
    },
    {
        path: '/sign-up/',
        requiresAuth: false
    },
    {
        path: '/add-products/',
        requiresAuth: true
    },
]


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
    } else {
        if (isLogIn) {
            window.location.replace('/')
        }
        if (isSignUp) {
            window.location.replace('/')
        }
    }
}

export function adminAccess(userIsSignedIn, isAdmin) {
    if (userIsSignedIn && !isAdmin) {
        if (isLogIn) {
            window.location.replace('/')
        }
        if (isSignUp) {
            window.location.replace('/')
        }
        if (isAddProducts) {
            window.location.replace('/')
        }
    } else if (userIsSignedIn && isAdmin) {
        if (isLogIn) {
            window.location.replace('/')
        }
        if (isSignUp) {
            window.location.replace('/')
        }
    }
}