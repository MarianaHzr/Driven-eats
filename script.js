
function selecaoComida(verde) {
const borda = document.querySelector (".selecao");
    if (borda !== null){
    borda.classList.remove ("selecao");   
    }
    verde.classList.toggle("selecao");
}


function selecaoBebida(azul) {
    const borda = document.querySelector (".selecao");
        if (borda !== null){
        borda.classList.remove ("selecao");   
        }
        azul.classList.toggle("selecao");
    }

function selecaoSobremesa (roxo) {
    const borda = document.querySelector (".selecao");
            if (borda !== null){
            borda.classList.remove ("selecao");   
            }
            roxo.classList.toggle("selecao");

}


