const navMenu = document.getElementById("menu");
const grupoIcones = document.getElementById("grupo-icones");
const body = document.getElementById("corpo");

function cliqueMenu(){
    if(navMenu.style.transform == 'translateY(0%)'){
        navMenu.style.transform = 'translateY(-100%)';
        grupoIcones.style.display = 'flex';
        body.style.overflow = 'auto';
    }
    else{
        navMenu.style.transform = 'translateY(0%)';
        grupoIcones.style.display = 'none';
        body.style.overflow = 'hidden';
    }
}

const blocoProf = document.querySelectorAll(".prof");

blocoProf.forEach((professor) =>
{

    const desc = professor.querySelector(".descricao");
    
    professor.addEventListener("click", function()
    {
        if(desc.style.display == "block")
        {
            desc.style.display = "none";
        }
        else
        {
            desc.style.display = "block";
        }
    });

});