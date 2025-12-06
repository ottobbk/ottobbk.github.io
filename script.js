import { data } from "./data.js"

let con_a = document.createElement("div")
con_a.setAttribute("class", "container")
const container = document.getElementById("container")

let h1_e =document.createElement('h1')
h1_e.innerHTML="KUI"+data.name

container.appendChild(h1_e)
