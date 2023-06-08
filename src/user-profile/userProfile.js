import '../global.scss'
import { addShoesWithId ,logOut } from '../firebase' 

const logOutButton = document.getElementById('log-out')
logOutButton.addEventListener('click',() => logOut())