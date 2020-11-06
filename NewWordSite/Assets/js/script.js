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

const formAdiciona = document.querySelector('#formAdiciona');

const aHeader = document.querySelector('#aHeader');
const paginaPrincipal = document.querySelector('#paginaPrincipal');
const meusRegistros = document.querySelector('#MeusRegistros');

const bars = document.querySelector("#bars");
const sectionPessoal = document.querySelector(".sectionPessoal");

const cloudMoon = document.querySelector('#cloudMoon');
const divSuspensaModoNoturnoStatus = document.querySelector('.divSuspensaModoNoturnoStatus');

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
            pNameDicionario1.textContent = inputNomeDicionario.value;
            formAdiçaoDicionario.style.display = "none";
            criar.style.display = "flex";
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
    if(pNameDicionario1.textContent != "Vazio") {
        controleSeleçao = pNameDicionario1.textContent;
        excluir.style.display = "inline-block";
        document.querySelector('#excluir').value = 1;
        adiciona.style.display = "inline-block";
        document.querySelector('#adiciona').value = 1;
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
    if(pNameDicionario2.textContent != "Vazio") {
        controleSeleçao = pNameDicionario2.textContent;
        excluir.style.display = "inline-block";
        document.querySelector('#excluir').value = 2;
        adiciona.style.display = "inline-block";
        document.querySelector('#adiciona').value = 2;
        statusSelecionado2.style.display = "inline-block";
        statusSelecionado1.style.display = "none";
        statusSelecionado3.style.display = "none";
        statusSelecionado4.style.display = "none";
    }else {
        excluir.style.display = "none";
        adiciona.style.display = "none";
        alert("campo vazio");
    }
}

dicionarioIcon3.onclick = function () {
    if(pNameDicionario3.textContent != "Vazio") {
        controleSeleçao =pNameDicionario3.textContent ;
        excluir.style.display = "inline-block";
        document.querySelector('#excluir').value = 3;
        adiciona.style.display = "inline-block";
        document.querySelector('#adiciona').value = 3;
        statusSelecionado3.style.display = "inline-block";
        statusSelecionado2.style.display = "none";
        statusSelecionado1.style.display = "none";
        statusSelecionado4.style.display = "none";
    }else {
        excluir.style.display = "none";
        adiciona.style.display = "none";
        alert("campo vazio");
    }
}

dicionarioIcon4.onclick = function () {
    if(pNameDicionario4.textContent != "Vazio") {
    controleSeleçao =pNameDicionario4.textContent;
    excluir.style.display = "inline-block";
    document.querySelector('#excluir').value = 4;
    adiciona.style.display = "inline-block";
    document.querySelector('#adiciona').value = 4;
    statusSelecionado4.style.display = "inline-block";
    statusSelecionado2.style.display = "none";
    statusSelecionado3.style.display = "none";
    statusSelecionado1.style.display = "none";
    }else {
        excluir.style.display = "none";
        adiciona.style.display = "none";
        alert("campo vazio");
    }
}

excluir.onclick = function () {
    if(pNameDicionario1.textContent == controleSeleçao) {
      
        adiciona.style.display = "none";
        excluir.style.display = "none";
        statusSelecionado1.style.display = "none";
    }

    if(pNameDicionario2.textContent == controleSeleçao) {
     
        adiciona.style.display = "none";
        excluir.style.display = "none";
        statusSelecionado2.style.display = "none";
    }

    if(pNameDicionario3.textContent == controleSeleçao) {

        adiciona.style.display = "none";
        excluir.style.display = "none";
        statusSelecionado3.style.display = "none";
    }

    if(pNameDicionario4.textContent == controleSeleçao) {

        adiciona.style.display = "none";
        excluir.style.display = "none";
        statusSelecionado4.style.display = "none";
    }
}


