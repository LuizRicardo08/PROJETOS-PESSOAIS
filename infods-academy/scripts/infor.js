// Pegando o main
const main = document.querySelector("main");

// Importando a grade curricular
import { gradeCurricularInfor } from "./disciplinas.js";

gradeCurricularInfor.forEach((blocos) => 
{

    // Criando h2
    const h2 = document.createElement("h2");
    h2.textContent = `${blocos.ano} - ${blocos.semestre}`;

    // Adicionando h2 ao main
    main.appendChild(h2);

    // Criando o container
    const containerDisciplinas = document.createElement("div");
    containerDisciplinas.classList = "container-disciplinas";

    // Adicionando container ao main
    main.appendChild(containerDisciplinas);

    // Percorrendo as disciplinas
    blocos.disciplinas.forEach((disciplina) =>
    {

        // Criando bloco da disciplina
        const divDisciplina = document.createElement("div");
        divDisciplina.classList = "disciplina";

        // Criando paragrafo
        const p = document.createElement("p");
        p.textContent = disciplina;
        
        // Adicionando paragrafo na div
        divDisciplina.appendChild(p);

        // Adicionando o bloco no container
        containerDisciplinas.appendChild(divDisciplina);

    });
});

// Delay de animação
const blocosDisciplinas = document.querySelectorAll(".disciplina");

blocosDisciplinas.forEach((bloco, indice) => 
{

    bloco.style.animationDelay = `${indice * 0.1}s`;

});