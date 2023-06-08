export function userValidation(userIsSignedIn) {

    const path = window.location.pathname
    if (!userIsSignedIn) {
        const isHome = path === '/'
        const isLogIn = path.includes('logIn')
        if (!isHome && !isLogIn) {
            window.location.replace('/logIn/')
            
        }
    } else {
        alert('Usuario está logueado')
    }
}