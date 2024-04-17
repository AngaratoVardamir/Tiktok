//função
const Limpar = document.getElementById("Limpar");
const TodosButton = [...document.querySelectorAll("input")];
const Igual = document.getElementById("Igual");
const Raiz = document.getElementById("Raiz");
const PI = document.getElementById("PI");
//Tela
const Tela = document.getElementById("Calculador");
//Lista da tela
let Display = []
let DisplayCalcudor = []
//Clique no Botão
TodosButton.map((el)=>{
    el.addEventListener("mousedown",()=>{
        Display.push(el.value);
        //Colocando na Tela
        Tela.innerHTML = (`${Display.join("")}`);
    })



})
//Calculando÷
Igual.addEventListener("mousedown",()=>{
    Display.map((num)=>{
        let numerf = (`${num}`).replace(`x`,`*`).replace(`÷`,`/`).replace(`P`,`**`).replace('%','*0.0');
        DisplayCalcudor.push(numerf)
    })
    //Calculado Tudo
    Tela.innerHTML = eval(String(DisplayCalcudor.join("")));

    while(Display.length) {
        Display.pop();
        DisplayCalcudor.pop();
    }
});
// Raiz Quadrada
Raiz.addEventListener("mousedown",()=>{
    if (Tela.innerHTML > 2){
        let RaizQuadrada = Math.sqrt(Tela.innerHTML)
        Tela.innerHTML = (Number(RaizQuadrada));
        while(Display.length) {
            Display.pop();
            DisplayCalcudor.pop();
        }
    }
})

// O Valor de PI
PI.addEventListener("mousedown",()=>{
    if (Tela.innerHTML > 2){
        let ValorPI = 2 * Math.PI * Tela.innerHTML
        Tela.innerHTML = (Number(ValorPI));
        while(Display.length) {
            Display.pop();
            DisplayCalcudor.pop();
        }
    }
})

Limpar.addEventListener("mousedown",()=>{
    Tela.innerHTML = ("");
    while(Display.length) {
        Display.pop();
        DisplayCalcudor.pop();
    }
})