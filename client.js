const socket = io("http://localhost:3333");

const form = document.querySelector(".forms")

const test = document.getElementById("pop")

const cont = document.querySelector(".container")
function app(join) {
    const mess = document.createElement("div")
    mess.innerText = join
    cont.append(mess)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const mes = test.value
    app(`You : ${mes}`)
    socket.emit("send", mes)
})


const name = prompt("Enter the name")
socket.emit("join", name)

socket.on("userJoined", (name) => {
    app(`${name} has joined`)
})

socket.on("recv", data => {
    app(`${data.names} :${data.mess}`)
})