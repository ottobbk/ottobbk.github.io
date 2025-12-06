import { data } from "./data.js"

let con_a = document.createElement("div")
con_a.setAttribute("class", "container")
const container = document.getElementById("container")

let h1_a =document.createElement('h1')
h1_a.setAttribute("class", "font2")
h1_a.innerHTML="My name is: "+data.name

let h1_b =document.createElement('h1')
h1_b.setAttribute("class", "font2")
h1_b.innerHTML="Age: "+data.age+"years old "

let h1_c =document.createElement('h1')
h1_c.setAttribute("class", "font2")
h1_c.innerHTML="My Fav food : "+data.favourite_food

let h1_d =document.createElement('h1')
h1_d.setAttribute("class", "font2")
h1_d.innerHTML="My Hobby: "+data.Hobby

let h1_e =document.createElement('h1')
h1_e.setAttribute("class", "font2")
h1_e.innerHTML="My school is : "+data.school
container.appendChild(h1_a)
container.appendChild(h1_b)
container.appendChild(h1_c)
container.appendChild(h1_d)
container.appendChild(h1_e)
 