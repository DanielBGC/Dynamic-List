function adicionar() {
    var lista = document.getElementById("lista")
    var mensagem = document.getElementById("mensagem") //.value

    var item = document.createElement("li") //cria um elemento <li>
    var textoItem = document.createTextNode(mensagem.value)

    var botao = document.createElement("button") //cria um botão
    botao.onclick = function() {
        item.parentNode.removeChild(item)
    }
            
    var textoButton = document.createTextNode("X") //ou botao.innerHTML = "Deleter"
    botao.appendChild(textoButton)

    item.appendChild(textoItem)
    item.appendChild(botao)
    botao.style.marginLeft = "10px";
    botao.style.height = "30px"

    lista.appendChild(item)

    lista.style.paddingTop = "10px";
    lista.style.paddingBottom = "10px";
     
    mensagem.value = ''
}

function remover() {
    var lista = document.getElementById("lista")

    lista.innerHTML = ''

}