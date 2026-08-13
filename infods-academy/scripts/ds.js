// Pegando o main
const main = document.querySelector("main");

// Importando as disciplinas
import {gradeCurricularDs} from "./disciplinas.js"

// Percorrendo os elementos e criando os blocos
gradeCurricularDs.forEach((elemento) => 
{
    
    // Titulo do semestre
    const h2 = document.createElement("h2");
    h2.textContent = `${elemento.ano} - ${elemento.semestre}`;

    // Container para abrigar as disciplinas
    const containerDisciplinas = document.createElement("div");
    containerDisciplinas.classList = "container-disciplinas";

    elemento.disciplinas.forEach((nomeDisciplina) =>
    {

        const disciplina = document.createElement("div");
        disciplina.classList = "disciplina";

        const p = document.createElement("p");
        p.textContent = nomeDisciplina;
        
        disciplina.appendChild(p);
        containerDisciplinas.appendChild(disciplina);

    });

    main.appendChild(h2);
    main.appendChild(containerDisciplinas);

});

// Delay de animação
const blocosDisciplinas = document.querySelectorAll(".disciplina");

blocosDisciplinas.forEach((elemento, indice) =>
{

    elemento.style.animationDelay = `${indice * 0.1}s`;

});