function Enviar(){
    let Peso_Input = document.querySelector("#Peso");
    let Altura_Input = document.querySelector("#Altura");
    
    var Peso = Peso_Input.value;
    var Altura = Altura_Input.value;

    var imc = (Peso/(Altura**2)).toFixed(2);


    const Imagem = document.getElementById("Corpo_Humano");
    const Texto = document.getElementById("Res");

    if (imc < 18.5){
        
        Imagem.src = "Ativos/Img/Abaixo_do_Peso2.png";
        Res.innerHTML= (`SEU IMC É: ${imc} [ Abaixo do Peso ]`);

    }else if(imc < 25){
        
        Imagem.src = "Ativos/Img/Peso_Ideal.png";
        Res.innerHTML= (`SEU IMC É: ${imc} [ Peso Ideal ]`);
        

    }else if(imc < 30){
        
        Imagem.src = "Ativos/Img/Sobrepeso2.png";
        Res.innerHTML= (`SEU IMC É: ${imc} [ Sobrepeso ]`);
        
        
    }else if(imc < 40){
        
        Imagem.src = "Ativos/Img/Obisidade.png";
        Res.innerHTML= (`SEU IMC É: ${imc} [ Obisidade ]`);
        
        
    }else{
        
        Imagem.src = "Ativos/Img/Obsidade_Morbida2.png";
        Res.innerHTML= (`SEU IMC É: ${imc} [ Obsidade Mórbida ]`);
        
    }
   
}