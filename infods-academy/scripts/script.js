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

const descricaoAdaylton = document.getElementById('desc-adaylton');

function descAdaylton()
{
    if(descricaoAdaylton.style.display == 'block')
    {
        descricaoAdaylton.style.display = 'none';
    }
    else
    {
        descricaoAdaylton.style.display = 'block';
    }
}

const descricaoKamila = document.getElementById('desc-kamila');

function descKamila()
{
    if(descricaoKamila.style.display == 'block')
    {
        descricaoKamila.style.display = 'none';
    }
    else
    {
        descricaoKamila.style.display = 'block';
    }
}

const descricaoJunior = document.getElementById('desc-junior');

function descJunior()
{
    if(descricaoJunior.style.display == 'block')
    {
        descricaoJunior.style.display = 'none';
    }
    else
    {
        descricaoJunior.style.display = 'block';
    }
}

const descricaoEraldo = document.getElementById('desc-eraldo');

function descEraldo()
{
    if(descricaoEraldo.style.display == 'block')
    {
        descricaoEraldo.style.display = 'none';
    }
    else
    {
        descricaoEraldo.style.display = 'block';
    }
}