//elemento from DOM
const hiding_layer = document.getElementById('hiding_layer')
const login__button = document.getElementById('login__button')
const signup__button = document.getElementById('signup__button')
const yellow_container__image = document.getElementById('yellow_container__image')
const yellow_box__title = document.getElementById('yellow_box__title')
const yellow_box__subtitle = document.getElementById('yellow_box__subtitle')

//event when login button is pushed
login__button.addEventListener('click',() => {
    hiding_layer.classList.remove('goRight')
    hiding_layer.classList.add('goLeft')
    yellow_container__image.classList.remove('register-picture')
    yellow_container__image.classList.add('login-picture')
    yellow_box__title.textContent = 'Wellcome, friend'
    yellow_box__subtitle.textContent = 'Create an account now and get the experience'
    login__button.classList.add('d-none')
    signup__button.classList.remove('d-none')
})
//event when signup button is pushed
signup__button.addEventListener('click',() => {
    hiding_layer.classList.remove('goLeft')
    hiding_layer.classList.add('goRight')
    yellow_container__image.classList.remove('login-picture')
    yellow_container__image.classList.add('register-picture')
    yellow_box__title.textContent = 'Wellcome Back'
    yellow_box__subtitle.textContent = 'Please log in to get into your profile'
    signup__button.classList.add('d-none')
    login__button.classList.remove('d-none')
})