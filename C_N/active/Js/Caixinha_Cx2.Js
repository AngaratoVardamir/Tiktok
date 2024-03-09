function Enviar(){
    // Ano de Nascimento
    const data = ((document.getElementById('Data')).value);
    const anonascim = (String(data)).slice(6)
    console.log(anonascim);


    // Ano Atual
    const anoatual = ((String((new Date()).getFullYear())).padStart(4,'0'));
    console.log(anoatual);
    //Calcunlo
    const Cal = ((anoatual)-(anonascim));
    console.log(Cal);

    //HTML
    const Categoria = document.getElementById('Categoria');
    const ImgCat = document.getElementById('ImgCat');

    console.log(Categoria.innerHTML);
    console.log(ImgCat.src);
    if (Cal <= 14){
        Categoria.innerHTML = ("Infantil");
        ImgCat.setAttribute("src","active/Img/Infantil.png");


    }else if(Cal <= 16){
        Categoria.innerHTML = ("Juvenil");
        ImgCat.setAttribute("src","active/Img/Juvenil.png");


    }else if(Cal <= 19){
        Categoria.innerHTML = ("Júnior");
        ImgCat.setAttribute("src","active/Img/Júnior.png");

    }else{
        Categoria.innerHTML = ("Sênior");
        ImgCat.setAttribute("src","active/Img/Sênior.png");

    }
}