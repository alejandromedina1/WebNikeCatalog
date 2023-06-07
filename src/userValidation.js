export function userValidation(userIsSignedIn) {

    const path = window.location.pathname
    if (!userIsSignedIn) {
        const isHome = path === '/'
        const isLogIn = path.includes('sign-up')
        if (!isHome && !isLogIn) {
            window.location.replace('/sign-up/')
            
        }
    } else {
        alert('Usuario está logueado')
    }
}