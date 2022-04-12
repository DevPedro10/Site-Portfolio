const subtitulo = document.querySelector("#subTitle")
const returnDescription = document.querySelector("#returnDescription")

function typeWriter(element, time){
    const textoArray = element.innerHTML.split("")
    element.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, time * i)
    })
}

typeWriter(subtitulo, 90)
// typeWriter(returnDescription, 40)