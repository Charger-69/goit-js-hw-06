const form = document.querySelector(".login-form");

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
const {
         elements: { email, password }
         } = event.currentTarget

    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены!')
        event.currentTarget.reset()
    }
        console.log(`Email: ${email.value}, Password: ${password.value}`)
}
