function updateInformation(title, description) {
    let returnDescription = document.querySelector(".returnDescription");
    let returnTitle = document.querySelector(".linguageOutputName");
    returnDescription.classList.add("mainP")
    returnTitle.classList.add("titleNameLinguage")

    document.querySelector(title).addEventListener('mouseover', () => {
        returnDescription.innerHTML = description;

        if(title === ".html") {
            returnTitle.innerHTML = "html";
            
        }
        if(title === ".css") {
            returnTitle.innerHTML = "css";

        }
        if(title === ".javascript") {
            returnTitle.innerHTML = "JavaScript";

        }
        if(title === ".responsive") {
            returnTitle.innerHTML = "responsividade";

        }
        if(title === ".git") {
            returnTitle.innerHTML = "git";

        }
        if(title === ".acessibility") {
            returnTitle.innerHTML = "acessibilidade";
        }
    });


    document.querySelector(title).addEventListener('mouseout', () => {
        returnDescription.innerHTML = "Passe o cursor sobre os ícones para ver sua descrição."
        returnTitle.innerHTML = ""
    })
}

const descriptionHTML = "Componente base da web para estruturar elementos usando tags"

const descriptionCSS = "Estilização de componentes, reaproveitamento de classes e flexibilidade com o código."

const descriptionJavascript = "Manipulação ao DOM dando Dinamismo para a página Web, Eventos e Objetos"

const descriptionResponsive = "Responsividade para dispositivos menores usando elementos Flexíveis"

const descriptionGit = "Versacionamento de Código usando os principais Comandos"

const descriptionAcessibility = "Principais meios de acessibilidade, usando contraste de cor, link alternativo, tamanho de fonte, entre outros..."


updateInformation(".html", descriptionHTML)
updateInformation(".css", descriptionCSS)
updateInformation(".javascript", descriptionJavascript)
updateInformation(".responsive", descriptionResponsive)
updateInformation(".git", descriptionGit)
updateInformation(".acessibility", descriptionAcessibility)







