// Pegando a lista
const lista = document.querySelector(".lista");

// Função para adicionar elementos
function adicionarTarefa()
{

    // Pegando as informações do formulário
    const tituloTarefa = document.querySelector(".form-tarefa").value;

    if(tituloTarefa)
    {

        // Clonar o modelo de lista de exibição que temos
        const modelo = document.querySelector(".modelo");

        const novaTarefa = modelo.cloneNode(true);

        // Adicionar o titulo da tarefa
        novaTarefa.querySelector(".titulo-tarefa").textContent = tituloTarefa;

        // Remover as classes usadas para clonar e sumir com o modelo
        novaTarefa.classList.remove("modelo");
        novaTarefa.classList.remove("display");

        // Mostrar na tela

        // Adicionando elemento
        lista.appendChild(novaTarefa);

        novaTarefa.querySelector(".btn-excluir").addEventListener("click", function()
        {
        
            removerTarefa(this);
        
        });

        // Editar
        novaTarefa.querySelector(".btn-editar").addEventListener("click", function()
        {

            editarTarefa(this);

        });

        // Concluida
        novaTarefa.querySelector(".btn-concluido").addEventListener("click", function()
        {

            tarefaConcluida(this);

        });

        // Resetando o formulário
        document.querySelector(".form-tarefa").value = "";
    }

}

// Pegando o botão de adicionar
const btnAdicionar = document.querySelector(".btn-adicionar");

btnAdicionar.addEventListener("click", function(e)
{
    
    e.preventDefault();

    adicionarTarefa();

});

// Remover tarefa
function removerTarefa(tarefa)
{
    tarefa.parentNode.remove();
}

// Editar tarefa

// Aqui são criadas variáveis globais pois os eventos são acumilativos, ou seja, se estivessem dentro da função, toda vez que ela for chamada, vão ser criados eventos para diferentes botões que também seriam sempre criados dento da função, ocasionando em interferências na edição de tarefa

let titulo; //Aqui eu guardo sempre apenas a tarefa que estou editando
let formEditar;

function editarTarefa(tareafa)
{
    titulo = tareafa.parentNode.querySelector(".titulo-tarefa");

    // Pegando o bloco de entrada e escondendo ele
    const divEntrada = document.querySelector(".entrada");
    divEntrada.style.display = "none";

    // Pegando o bloco de edição e exibindo ele
    const divEditar = document.querySelector(".editar");
    divEditar.style.display = "block";

    // Pegando a lista e escondendo ela
    const lista = document.querySelector(".lista");
    lista.style.display = "none";
    
    // Pegando o input de edição
    formEditar = document.querySelector(".form-editar");
    formEditar.value = titulo.textContent;

    console.log(formEditar.value);
    
}

// Evento do botão

//Aqui eu pego o botão apenas 1 vez e edito o título da tarefa que está na variável acima "titulo". Sempre será relacionado a ela.
const btnOk = document.querySelector(".btn-ok");
btnOk.addEventListener("click", function(event)
{

    if(formEditar.value)
    {

        const formEditar = document.querySelector(".form-editar");

        // Mudando o titulo da tarefa
        titulo.textContent = formEditar.value;

        // Exibindo o bloco de adicionar tarefas
        document.querySelector(".entrada").style.display = "block";

        // Escondendo bloco de edição
        document.querySelector(".editar").style.display = "none";

        // Mostrando a lista
        document.querySelector(".lista").style.display = "block";
    }

    event.preventDefault();

});

// Tarefa concluída
function tarefaConcluida(tarefa)
{

    const tarefaCompleta = tarefa.parentNode;

    tarefaCompleta.classList.toggle("concluido");

}