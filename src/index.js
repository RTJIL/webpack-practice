// index.js
import "./style.css"
import { greeting } from "./greeting.js"
import coolCollage from "./images/PiretSphereFinal.png";

console.log(greeting)

const MyImage = document.createElement('img');
MyImage.src = coolCollage

MyImage.alt = 'Cool collage'

const container = document.getElementById('jsImageTst')

container.appendChild(MyImage)
