import './global.scss'

import {
    logOut
} from './firebase'

const logOutButton = document.getElementById('log-out')
console.log(logOutButton)

logOutButton.addEventListener('click', () => logOut())




