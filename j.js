//Botão para "traduzir"
function mFuncao(){
    var x = document.getElementById('paragrafo');
    x.innerHTML="Hello!";
    
}

//Acender e apagar a Luz
/*function trocaImagem() {
    var elemento=document.getElementById("myimage");
    if (elemento.src.match("acesa.png")) {
        elemento.src="apagada.png";
        
    } 
    else {
    elemento.src="acesa.png";
    
    }
}
*/  

function trocaImagem() {
    var elemento = document.getElementById("minhaimagem");
    var mensagemElemento = document.getElementById("mensagem");

    if (elemento.src.match("acesa.png")) {
        elemento.src = "apagada.png";
        mensagemElemento.textContent = "A lâmpada está apagada.";
    } else {
        elemento.src = "acesa.png";
        mensagemElemento.textContent = "A lâmpada está acesa.";
    }
}


//Soma de dois números

function Soma(){
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML = "Resposta:" + (e1+e2);

}
  
    