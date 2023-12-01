function getLista(){

    const ol = document.querySelector('#itens')
    const li_list = ol.querySelectorAll('li')

    return li_list
}
function adicionaNaLista(text){

    const ol = document.querySelector('#itens')
    const li = document.createElement('li')
    li.textContent = text
    
    ol.appendChild(li)
    
} 
function removeDaLista(idx){
    const lista = getLista()
    lista.removeChild(idx);

} 
function limpaLista(){
    const lista = getLista();
    
    lista.forEach(item => {
        item.parentNode.removeChild(item);
    });
}

export {getLista, adicionaNaLista, removeDaLista, limpaLista }