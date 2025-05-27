alert ("Welcome ao jogo do número secreto");
let numeroMax = 100;
let numeroSecreto = parseInt (Math.random() * numeroMax +1);
console.log (numeroSecreto);
let Chute;
let tentativas = 1;


while(Chute != numeroSecreto){
    Chute = prompt (`Escolha um número de 1 até ${numeroMax}`);

    if ( Chute == numeroSecreto ){
        break;
    } else {
        if(Chute > numeroSecreto){
            alert (`seu chute é menor que o ${Chute}`);
        } else {
            alert (`seu chute é maior que o ${Chute}`);
        }
           
        tentativas++
    }
}
let palavratentativa = tentativas > 1 ? "tentativas" : "tentativa"

alert (`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}`);

//if (tentativas > 1 ){
//    alert (`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);

//}else{
//    alert (`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);

//}
