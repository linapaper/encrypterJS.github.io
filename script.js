const textoAUsar = document.querySelector(".instruction");
const resultado = document.querySelector(".caja-mostrador");

/**La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"**/
function botonEncrip(){
    const textoEncriptado = encriptarTexto(textoAUsar.value);
    resultado.textContent = textoEncriptado;
    textoAUsar.value = "";
    resultado.style.backgroundImage = "none";
}

function encriptarTexto (textoIngresado){
    let clavesEncriptador = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoIngresado = textoIngresado.toLowerCase()

    for(let i = 0; i < clavesEncriptador.length; i++){
        if(textoIngresado.includes(clavesEncriptador[i][0])){
            textoIngresado = textoIngresado.replaceAll(clavesEncriptador[i][0], clavesEncriptador[i][1])
        }
    }
    return textoIngresado;
}

function botonDesencrip(){
    const textoDesencriptado = desencriptarTexto(textoAUsar.value);
    resultado.textContent = textoDesencriptado;
    textoAUsar.value = "";
    resultado.style.backgroundImage = "none";
}

function desencriptarTexto (textoADesencriptar){
    let clavesEncriptador = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoADesencriptar = textoADesencriptar.toLowerCase()

    for(let i = 0; i < clavesEncriptador.length; i++){
        if(textoADesencriptar.includes(clavesEncriptador[i][1])){
            textoADesencriptar= textoADesencriptar.replaceAll(clavesEncriptador[i][1], clavesEncriptador[i][0])
        }
    }
    return textoADesencriptar;
}
    