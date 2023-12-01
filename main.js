import { getLista, adicionaNaLista, removeDaLista, limpaLista } from '../lista.js'

const pEntrada = document.querySelector('#entrada')
const btnAdicionar = document.querySelector('#adicionar')
const btnLimpar = document.querySelector('#limpar')
const olItens = document.querySelector('#itens')

atualizaListaOrdenada()

btnAdicionar.addEventListener('click',adicionaItemDaEntrada)
btnLimpar.addEventListener('click',limparListaOrdenada)

function limparListaOrdenada(){
    limpaLista()
}

function adicionaItemDaEntrada(){
    const valor = pEntrada.textContent
    adicionaNaLista(valor)
    pEntrada.textContent = ""
    atualizaListaOrdenada()
}

function atualizaListaOrdenada(){
    const lista = getLista()
    olItens.innerHTML = ""
    for(let i =0; i <lista.length; i++)
        adicionaNaLista(lista[i].textContent)
}