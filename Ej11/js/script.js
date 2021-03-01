function dados(){
    var dado1, dado2, resultado;
    var frequencia = [0,0,0,0,0,0,0,0,0,0,0];
    for (var index = 1; index < 36000; index++) {
            dado1 = Math.floor(6*Math.random())+1;
            dado2 = Math.floor(6*Math.random())+1;
            resultado = dado1+dado2;
            frequencia[resultado-2]++;
    }
    for (var inder = 0; inder < frequencia.length; inder++) {
        document.getElementById("resultadoDados").innerHTML += 'Numero de dado : '+ (inder+2)+ ' con resultado '+
         frequencia[inder]+'<br>';       
    }
}