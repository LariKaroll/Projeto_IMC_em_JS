function imc() {
    // declaraçao de variáveis
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let result = document.getElementById('result');
    let imc = document.getElementById('imc');

    // substitui vírgula por ponto
    altura = altura.replace(',','.');
    peso = peso.replace(',','.');

    // calculo imc
    let calculo = peso / (altura * altura);

    // arredondando valor
    calculo = calculo.toFixed(2);

    // mostrar na tela o imc do usúario
    result.innerHTML = calculo.replace ('.',',') + '<br />';

    // mostrar se o usuario está dentro no peso ideal ou não
    if(calculo <= 18.5) 
        imc.innerHTML = 'Você está abaixo do peso.';
    else if (calculo >= 18.5 && calculo <= 24.9)
        imc.innerHTML = 'Você está no peso ideal.';
    else if (calculo >= 25 && calculo <= 29.9)
        imc.innerHTML = 'Você está acima do peso.';
    else if (calculo >= 30 && calculo <= 34.9)
        imc.innerHTML = 'Você está com Obesidade grau I.';
    else if (calculo >= 35 && calculo <= 39.9)
        imc.innerHTML = 'Você está com Obesidade grau II.';
    if(calculo >= 40) 
        imc.innerHTML = 'Você está com Obesidade grau II.';
}