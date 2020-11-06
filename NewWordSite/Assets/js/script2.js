const body = document.querySelector('body');

const aHeader = document.querySelector('#aHeader');
const paginaPrincipal = document.querySelector('#paginaPrincipal');
const meusRegistros = document.querySelector('#MeusRegistros');
const aAba = document.querySelector('.aAba');
const bars = document.querySelector("#bars");
const sectionPessoal = document.querySelector(".sectionPessoal");

const cloudMoon = document.querySelector('#cloudMoon');
const divSuspensaModoNoturnoStatus = document.querySelector('.divSuspensaModoNoturnoStatus');
const buttonSelecionar = document.querySelector('#selecionar');

var contagemEspaço = 1; 
//mais tarde os dados vao vir do servidor sem a necessidade de contagem so pelo texto contido nos pNameDicionario.
var controleSeleçao ="";

var modoAtivo = 1;


var x = 2;
bars.onclick = function () {
    sectionPessoal.classList.toggle("show");
    if(x == 2) {
        bars.style.color = "#AB6B00";
    }else {
        bars.style.color = "black";  
    }

    if(x == 2) {
        x = 1;
    }else {
        x = 2;
    }

}


if(screen.width <= 640) {
    document.querySelector('#pReg').textContent = "Registros";
    document.querySelector('#pPerf').textContent = "Perfil";
    document.querySelector('.login').textContent = "login";
    document.querySelector('#copyright').textContent = "Copyright © 2020 NewWord."
}




const dicionarioIcon1Registros = document.querySelector('#dicionarioIcon1Registros');
const dicionarioIcon2Registros = document.querySelector('#dicionarioIcon2Registros');
const dicionarioIcon3Registros = document.querySelector('#dicionarioIcon3Registros');
const dicionarioIcon4Registros = document.querySelector('#dicionarioIcon4Registros');


const pNameDicionario1Registros = document.querySelector('#pNameDicionario1Registros');
const pNameDicionario2Registros = document.querySelector('#pNameDicionario2Registros');
const pNameDicionario3Registros = document.querySelector('#pNameDicionario3Registros');
const pNameDicionario4Registros = document.querySelector('#pNameDicionario4Registros');

const RetornoDadosDicionario = document.querySelector('#RetornoDadosDicionario');
const excluirPalavra = document.querySelector('#excluirPalavra');


var dicSelecionado=0;

dicionarioIcon1Registros.onclick = function () {
    if(pNameDicionario1Registros.textContent != "Vazio") {
        controleSeleçao = pNameDicionario1Registros.textContent ;
        document.querySelector('#selecionar').value = 1;
        dicSelecionado = 1;
    }else {
        alert("campo vazio");
    }
}

dicionarioIcon2Registros.onclick = function () {
    if(pNameDicionario2Registros.textContent != "Vazio") {
        document.querySelector('#selecionar').value = 2;
        controleSeleçao = pNameDicionario2Registros.textContent;
        dicSelecionado = 2;
    }else {
        alert("campo vazio");
    }
}

dicionarioIcon3Registros.onclick = function () {
    if(pNameDicionario3Registros.textContent != "Vazio") {
        document.querySelector('#selecionar').value = 3;
        controleSeleçao =pNameDicionario3Registros.textContent ;
        dicSelecionado = 3;
    }else {
        alert("campo vazio");
    }
}

dicionarioIcon4Registros.onclick = function () {
    if(pNameDicionario4Registros.textContent != "Vazio") {
    document.querySelector('#selecionar').value = 4;
    controleSeleçao =pNameDicionario4.textContent;
    dicSelecionado = 4;
    }else {
        alert("campo vazio");
    }
}

buttonSelecionar.onclick = function () {
    if (dicSelecionado == 1) {
        statusSelecionado1Registros.style.display = "inline-block";
        statusSelecionado2Registros.style.display = "none";
        statusSelecionado3Registros.style.display = "none";
        statusSelecionado4Registros.style.display = "none";
    }else {
        if (dicSelecionar == 2) {
            statusSelecionado2Registros.style.display = "inline-block";
            statusSelecionado1Registros.style.display = "none";
            statusSelecionado3Registros.style.display = "none";
            statusSelecionadoRegistros4.style.display = "none";
        }else {
            if (dicSelecionar == 3) {
                statusSelecionado3Registros.style.display = "inline-block";
                statusSelecionado2Registros.style.display = "none";
                statusSelecionado1Registros.style.display = "none";
                statusSelecionado4Registros.style.display = "none";
            }else {
                    statusSelecionado4Registros.style.display = "inline-block"; 
                    statusSelecionado2Registros.style.display = "none";
                    statusSelecionado3Registros.style.display = "none";
                    statusSelecionado1Registros.style.display = "none";  
            } 
        }
    }
}


