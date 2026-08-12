// Pegar o visor
const visor = document.querySelector(".visor");

// Pegar os botoes

document.querySelector(".limpar").addEventListener("click", function()
{

    visor.textContent = "";

});

document.querySelector(".apagar").addEventListener("click", function()
{

    

});


// Numeros
const numeros = document.querySelectorAll(".numero");

numeros.forEach(function(numero)
{

    numero.addEventListener("click", function()
    {

        visor.textContent += numero.textContent;

    });

});

// Operadores matemáticos
const operadores = document.querySelectorAll(".operacao");

operadores.forEach(function(operador)
{

    operador.addEventListener("click", function()
    {

        visor.textContent += operador.textContent;

    });

});

// Ponto
const ponto = document.querySelector(".ponto");

ponto.addEventListener("click", function()
{
    visor.textContent += ponto.textContent;
});

// Backspace
const backspace = document.querySelector(".apagar");

backspace.addEventListener("click", function()
{

    visor.textContent = visor.textContent.slice(0, -1);

});

// Resultado no visor
const result = document.querySelector(".resultado");

let conteudoVisor;
let resultado;

result.addEventListener("click", function()
{

    conteudoVisor = visor.textContent;

    resultado = eval(conteudoVisor);

    visor.textContent = resultado;

});

document.addEventListener("keydown", function(event)
{
    
    if(event.key >= "0" && event.key <= "9")
    {
        visor.textContent += event.key;
    }

    if(event.key == "+" || event.key == "-" || event.key == "*" || event.key == "/")
    {
        visor.textContent += event.key;
    }

    if(event.key == "Escape")
    {
        visor.textContent = "";
    }

    if(event.key == "Backspace")
    {
        visor.textContent = visor.textContent.slice(0, -1);
    }

    if(event.key == "Enter")
    {
        conteudoVisor = visor.textContent;

        resultado = eval(conteudoVisor);

        visor.textContent = resultado;
    }

    if(event.key == "." || event.key == ",")
    {
        visor.textContent += ".";
    }

    console.log(event.key);

})