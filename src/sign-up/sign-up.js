import {
    createUser
} from "../firebase"



const formButton = document.getElementById('form-button')
formButton.addEventListener('click', (e) => signUp(e))

function signUp(e) {
    e.preventDefault()
    const email = document.getElementById('email-input').value
    const username = document.getElementById('username-input').value
    const birthday = document.getElementById('birthday-input').value
    const urlImage = document.getElementById('file-input').files[0]
    const password = document.getElementById('password-input').value
    const confirmPassword = document.getElementById('conf-password-input').value
    
    const userInfo = {
        email: email,
        username: username,
        birthday: birthday,
        url: urlImage,
        password: password
    }


    console.log(userInfo)

    if (userInfo.password === confirmPassword) {
        createUser(userInfo)
    } else {
        alert('Las contraseñas no coinciden')
    }
}