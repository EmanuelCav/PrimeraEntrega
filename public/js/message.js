const socket = io();

const formMessage = document.getElementById("form-message")

formMessage.addEventListener("submit", (e) => {

    e.preventDefault()

    const message = document.getElementById("message").value
    const user = document.getElementById("user").value

    if(user.length === 0 || message.length === 0) {
        return
    }

    socket.emit('newMessage', {message, user})

    document.getElementById("message").value = ""

})

socket.on('updateMessages', (messages) => {

    const containerMessages = document.getElementById("container-messages")

    containerMessages.innerHTML = '';

    messages.forEach((message) => {
        containerProducts.innerHTML += `
            <p>${message.user}: ${message.message}</p>
        `
    })

})




