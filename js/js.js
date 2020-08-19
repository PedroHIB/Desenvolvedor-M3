var verificadorOrdem = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
var menu = document.getElementById('menu-hidde');
if (verificadorOrdem == 1) {
    menu.style.display = "block";
    verificadorOrdem = 0;
}else{
    menu.style.display = "none";
    verificadorOrdem = 1;
    }
})


//Menu Responsivo
const btnfil = document.querySelector(".btnfiltro")


var show = true; 
const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
})
var show2 = true
const menuSection2 = document.querySelector(".menu-section2")
const menuToggle2 = menuSection2.querySelector(".menu-toggle2")
menuToggle2.addEventListener("click", () => {
    document.body.style.overflow = show2 ? "hidden" : "initial"
    menuSection2.classList.toggle("on", show2)
    show2 = !show2;
})


const texto = document.querySelector('.menu-toggle')
var verificar = true
texto.addEventListener('click', function(){
    if (verificar){
        texto.innerHTML = "x"
        texto.style.border = "none"
        verificar = !verificar
    } else {
        texto.innerHTML = "Ordenar"
        texto.style.border = "1px solid"
        verificar = true
    }
})

const texto2 = document.querySelector('.menu-toggle2')
var verificar = true
texto2.addEventListener('click', function(){
    if (verificar){
        texto2.innerHTML = "x"
        texto2.style.border = "none"
        if(!verifiCores)
            secCores.style.display = "block"
        if(!verifitam)
            sectam.style.display = "grid"
        if(!verifiPre)
            secPre.style.display = "block"
        verificar = !verificar
    } else {
        texto2.innerHTML = "Filtrar"
        texto2.style.border = "1px solid"

        sectam.style.display = "none"
        secCores.style.display = "none"
        secPre.style.display = "none"

        verificar = true
    }
})


const secCores = document.querySelector('.secCores')
var verifiCores = true
document.querySelector('#plusCor').addEventListener("click", function(){
    if(verifiCores){
        secCores.style.display = "block"
        verifiCores = !verifiCores
    }else{
        secCores.style.display = "none"
        verifiCores = true
    }
})
const sectam = document.querySelector('.secTamanhos')
var verifitam = true
document.querySelector('#plusTam').addEventListener("click", function(){
    if(verifitam){
        sectam.style.display = "grid"
        secPre.style.marginTop = "150px" 
        verifitam = !verifitam
    }else{
        sectam.style.display = "none"
        secPre.style.marginTop = "270px" 
        verifitam = true
    }
})
const secPre = document.querySelector('.secprecos')
var verifiPre = true
document.querySelector('#plusPre').addEventListener("click", function(){
    if(verifiPre){
        secPre.style.display = "block"
        verifiPre = !verifiPre
    }else{
        secPre.style.display = "none"
        verifiPre = true
    }
})
