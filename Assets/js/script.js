const body = document.querySelector('body');
const buttonTodosDicionarios = document.querySelector('#todosDicionarios');
const formAdiçaoDicionario = document.querySelector('#formAdiçaoDicionario');
const aAba = document.querySelector('.aAba');
const buttonAdiciona = document.querySelector('#ExecutaCriaçao');
const inputNomeDicionario = document.querySelector('#inputNome'); 

const divVazio = document.querySelector('#divVazio');
const sectionDados = document.querySelector('#sectionDados');
const criar = document.querySelector('#criar');
const divDicionariosLink = document.querySelector('#divDicionariosLink');

const dicionarioIcon1 = document.querySelector('#dicionarioIcon1');
const dicionarioIcon2 = document.querySelector('#dicionarioIcon2');
const dicionarioIcon3 = document.querySelector('#dicionarioIcon3');
const dicionarioIcon4 = document.querySelector('#dicionarioIcon4');


const pNameDicionario1 = document.querySelector('#pNameDicionario1');
const pNameDicionario2 = document.querySelector('#pNameDicionario2');
const pNameDicionario3 = document.querySelector('#pNameDicionario3');
const pNameDicionario4 = document.querySelector('#pNameDicionario4');

const excluir = document.querySelector('#excluir');
const adiciona = document.querySelector('#adiciona');
const aAdiciona = document.querySelector('#aAdiciona');
const formAdiciona = document.querySelector('#formAdiciona');

const aHeader = document.querySelector('#aHeader');
const paginaPrincipal = document.querySelector('#paginaPrincipal');
const meusRegistros = document.querySelector('#MeusRegistros');

const bars = document.querySelector("#bars");
const sectionPessoal = document.querySelector(".sectionPessoal");

const cloudMoon = document.querySelector('#cloudMoon');
const divSuspensaModoNoturnoStatus = document.querySelector('.divSuspensaModoNoturnoStatus');

var contagemEspaço = 1; //mais tarde os dados vao vir do servidor sem a necessidade de contagem so pelo texto contido nos pNameDicionario.
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


cloudMoon.onclick = function() {
    if(modoAtivo == 1) {
        divSuspensaModoNoturnoStatus.textContent = "desligar";
        body.style.backgroundColor = "#1e1e1e";
        document.querySelector('#Inf').style.color = "#e3e3e3";
        document.querySelector('#InfRegistros').style.color = "#e3e3e3";
        document.querySelector('#infVazio').style.color = "#e3e3e3";
        document.querySelector('#pMDicionarios').style.color = "#e3e3e3";
        document.querySelector('#pMDicionariosRegistros').style.color = "#e3e3e3";
        document.querySelector('#InfDadosDicionarioSelecionado').style.color = "#e3e3e3";
        document.querySelector('.infForm').style.color = "#e3e3e3";
        document.querySelector('#novoNome').style.color = "#e3e3e3";
        inputNomeDicionario.style.backgroundColor = "#e3e3e3";
        inputNomeDicionario.style.color = "#e3e3e3"
        excluirPalavra.style.color = "#e3e3e3";
        document.querySelector('.abas').style.borderColor = "#e3e3e3";
        document.querySelector('#abasRegistros').style.borderColor = "#e3e3e3";
        document.querySelector('#sectionDados').style.borderColor = "#e3e3e3";
        document.querySelector('#divDicionariosLinkRegistros').style.borderColor = "#e3e3e3";
        modoAtivo = 2;
        }else{
        divSuspensaModoNoturnoStatus.textContent = "ligar";
        document.querySelector('#Inf').style.color = "rgb(17, 17, 17)";
        document.querySelector('#InfRegistros').style.color = "rgb(17, 17, 17)";
        document.querySelector('#infVazio').style.color = "rgb(17, 17, 17)";
        document.querySelector('#pMDicionarios').style.color = "rgb(17, 17, 17)";
        document.querySelector('#pMDicionariosRegistros').style.color = "rgb(17, 17, 17)";
        document.querySelector('#InfDadosDicionarioSelecionado').style.color = "rgb(17, 17, 17)";
        document.querySelector('.infForm').style.color = "rgb(17, 17, 17)";
        document.querySelector('#novoNome').style.color = "rgb(17, 17, 17)";
        inputNomeDicionario.style.backgroundColor = "white";
        excluirPalavra.style.color = "rgb(17, 17, 17)";
        document.querySelector('.abas').style.borderColor = "#1988F7";
        document.querySelector('#sectionDados').style.borderColor = "#1988F7";
        document.querySelector('#divDicionariosLinkRegistros').style.borderColor = "#1988F7";
        document.querySelector('#abasRegistros').style.borderColor = "#1988F7";
        modoAtivo = 1;
        body.style.backgroundColor = "white";
    }
}

aHeader.onclick = function () {
     paginaPrincipal.style.display = "none";
     meusRegistros.style.display = "inline-block";
     sectionPessoal.classList.remove('show');
     bars.style.color = "black";
     x = 2;
}
buttonTodosDicionarios.onclick = function () {
    divVazio.style.display = "none";
    buttonTodosDicionarios.style.fontFamily = "quicksandBold";
    sectionDados.style.display = "flex";
    criar.style.display = "flex";
}

criar.onclick = function () {
    formAdiçaoDicionario.style.display = "flex";
    criar.style.display = "none";
}

buttonAdiciona.onclick = function () {
    if(contagemEspaço <= 4 ) {
        if(pNameDicionario1.textContent == "O nome Do dicionario") {
            pNameDicionario1.textContent = inputNomeDicionario.textContent;
            formAdiçaoDicionario.style.display = "none";
            criar.style.display = "flex";
            divVazio.style.display = "none";
               //faz o envio para o servidor...
    contagemEspaço = contagemEspaço+1
        }else {
            if(pNameDicionario2.textContent == "O nome Do dicionario" && inputNomeDicionario.value != pNameDicionario1.textContent ) {
                pNameDicionario2.textContent = inputNomeDicionario.value;
                formAdiçaoDicionario.style.display = "none";
                criar.style.display = "flex";
                   //faz o envio para o servidor...
    contagemEspaço = contagemEspaço+1
            }else {
                if(pNameDicionario3.textContent == "O nome Do dicionario" && inputNomeDicionario.value != pNameDicionario1.textContent && inputNomeDicionario.value != pNameDicionario2.textContent ) {
                    pNameDicionario3.textContent = inputNomeDicionario.value;
                    formAdiçaoDicionario.style.display = "none";
                    criar.style.display = "flex";
                       //faz o envio para o servidor...
    contagemEspaço = contagemEspaço+1
                }else {
                    if( inputNomeDicionario.value != pNameDicionario1.textContent && inputNomeDicionario.value != pNameDicionario2.textContent && inputNomeDicionario.value != pNameDicionario3.textContent) {
                        pNameDicionario4.textContent = inputNomeDicionario.value;
                        formAdiçaoDicionario.style.display = "none";
                        criar.style.display = "flex";
                           //faz o envio para o servidor...
        contagemEspaço = contagemEspaço+1
                    }
                }
            }
        }
    }else {
        criar.style.display = "none";
        alert("Você não pode adicionar mais dicionarios");
    }
}

dicionarioIcon1.onclick = function () {
    if(pNameDicionario1.textContent != "O nome Do dicionario") {
        controleSeleçao = pNameDicionario1.textContent;
        excluir.style.display = "inline-block";
        adiciona.style.display = "inline-block";
        statusSelecionado1.style.display = "inline-block";
        statusSelecionado2.style.display = "none";
        statusSelecionado3.style.display = "none";
        statusSelecionado4.style.display = "none";
    }else {
        excluir.style.display = "none";
        alert("campo vazio");
    }
}

dicionarioIcon2.onclick = function () {
    if(pNameDicionario2.textContent != "O nome Do dicionario") {
        controleSeleçao = pNameDicionario2.textContent;
        excluir.style.display = "inline-block";
        adiciona.style.display = "inline-block";
        statusSelecionado2.style.display = "inline-block";
        statusSelecionado1.style.display = "none";
        statusSelecionado3.style.display = "none";
        statusSelecionado4.style.display = "none";
    }else {
        excluir.style.display = "none";
        alert("campo vazio");
    }
}

dicionarioIcon3.onclick = function () {
    if(pNameDicionario3.textContent != "O nome Do dicionario") {
        controleSeleçao =pNameDicionario3.textContent ;
        excluir.style.display = "inline-block";
        adiciona.style.display = "inline-block";
        statusSelecionado3.style.display = "inline-block";
        statusSelecionado2.style.display = "none";
        statusSelecionado1.style.display = "none";
        statusSelecionado4.style.display = "none";
    }else {
        excluir.style.display = "none";
        alert("campo vazio");
    }
}

dicionarioIcon4.onclick = function () {
    if(pNameDicionario4.textContent != "O nome Do dicionario") {
    controleSeleçao =pNameDicionario4.textContent;
    excluir.style.display = "inline-block";
    adiciona.style.display = "inline-block";
    statusSelecionado4.style.display = "inline-block";
    statusSelecionado2.style.display = "none";
    statusSelecionado3.style.display = "none";
    statusSelecionado1.style.display = "none";
    }else {
        excluir.style.display = "none";
        alert("campo vazio");
    }
}


aAdiciona.onclick = function () {
    adiciona.style.display = "none";
    formAdiciona.style.display = "flex";
}


excluir.onclick = function () {
    if(pNameDicionario1.textContent == controleSeleçao) {
        pNameDicionario1.textContent = "O nome Do dicionario";
        adiciona.style.display = "none";
        excluir.style.display = "none";
        statusSelecionado1.style.display = "none";
    }

    if(pNameDicionario2.textContent == controleSeleçao) {
        pNameDicionario2.textContent = "O nome Do dicionario";
        adiciona.style.display = "none";
        excluir.style.display = "none";
        statusSelecionado2.style.display = "none";
    }

    if(pNameDicionario3.textContent == controleSeleçao) {
        pNameDicionario3.textContent = "O nome Do dicionario";
        adiciona.style.display = "none";
        excluir.style.display = "none";
        statusSelecionado3.style.display = "none";
    }

    if(pNameDicionario4.textContent == controleSeleçao) {
        pNameDicionario4.textContent = "O nome Do dicionario";
        adiciona.style.display = "none";
        excluir.style.display = "none";
        statusSelecionado4.style.display = "none";
    }
}

//Apartir daqui, está o codigo da aba de Registros:


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

dicionarioIcon1Registros.onclick = function () {
    if(pNameDicionario1Registros.textContent != "O nome Do dicionario") {
        controleSeleçao = pNameDicionario1Registros.textContent;
        statusSelecionado1Registros.style.display = "inline-block";
        statusSelecionado2Registros.style.display = "none";
        statusSelecionado3Registros.style.display = "none";
        statusSelecionado4Registros.style.display = "none";
    }else {
        alert("campo vazio");
    }
}

dicionarioIcon2Registros.onclick = function () {
    if(pNameDicionario2Registros.textContent != "O nome Do dicionario") {
        controleSeleçao = pNameDicionario2Registros.textContent;
        statusSelecionado2Registros.style.display = "inline-block";
        statusSelecionado1Registros.style.display = "none";
        statusSelecionado3Registros.style.display = "none";
        statusSelecionadoRegistros4.style.display = "none";
    }else {
        alert("campo vazio");
    }
}

dicionarioIcon3Registros.onclick = function () {
    if(pNameDicionario3Registros.textContent != "O nome Do dicionario") {
        controleSeleçao =pNameDicionario3Registros.textContent ;
        statusSelecionado3Registros.style.display = "inline-block";
        statusSelecionado2Registros.style.display = "none";
        statusSelecionado1Registros.style.display = "none";
        statusSelecionado4Registros.style.display = "none";
    }else {
        alert("campo vazio");
    }
}

dicionarioIcon4Registros.onclick = function () {
    if(pNameDicionario4Registros.textContent != "O nome Do dicionario") {
    controleSeleçao =pNameDicionario4.textContent;
    statusSelecionado4Registros.style.display = "inline-block";
    statusSelecionado2Registros.style.display = "none";
    statusSelecionado3Registros.style.display = "none";
    statusSelecionado1Registros.style.display = "none";
    }else {
        alert("campo vazio");
    }
}

RetornoDadosDicionario.onclick = function () {
    excluirPalavra.style.display = "inline-block"
}


