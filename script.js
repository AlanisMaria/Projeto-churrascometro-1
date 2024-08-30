function calcular() {
    const adultos = inputAdultos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;

    constqdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    constqdtTotalCerveja = cervejaPP(duracao) * adultos;
    const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mias de um innerHTML
    
    resultado.inner = '<h2 class="result-info"> Voce vai precisar de:</h2>'
    resultado.innerHTML +=`
     <div class="result-block">
        <img scr=",/assets/carne.svg"/>
        <p>${qdtTotalCarne/1000} Kg de Carne</p>
        </div>
     `
    resultado.innnerHTML +=`  
      <div class="result-block">
         <img scr=",assets/cerveja.svg"/>
         <p>${Math.ceil(qdtTotalCerveja/355)}latas de Cerveja</p>
         </div>
     `
     resultado.innerHtml +=`  
       <div class="result-block">
         <img scr=",/assets/refri.svg"/>
         <p>${Math.ceil(qdtTotalBebidas/2000)} garrafas de Bebidas</p>
       </div>
    '
    
}