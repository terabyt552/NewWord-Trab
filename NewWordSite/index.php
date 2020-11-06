<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NewWord</title>
    <meta name="author" content="Lucas Pereira">
    <link rel="stylesheet" href="./Assets/style/style.css">
    <link rel="stylesheet" href="./Assets/fontvendor/css/all.css">
</head>
<body>
    <header>
        <section id="sectionMenuLogo">
            <div class="navbar" >
               <button id="bars"><i class="fas fa-bars"></i></button> 
            </div>
            <div>
                <a class="titulo" href="./index.php "a><p>NewWord</p></a>
            </div>
        </section>
        <nav class="sectionPessoal">
            <a class="aHeader"><p class="subTitulo" id="pPerf">Meu perfil</p></a>
            <a class="aHeader"id="aHeader" href="./index2.php"><p class="subTitulo" id="pReg">Meus Registros</p></a>
            <a  class="aHeader"><p class="subTitulo">Referencia</p></a>
        </nav>
        <section id="sectionFerramentas">
            <a href="" class="login"><p>Fazer login</p></a>
            <div class="modoNoturno" >
                <i class="fas fa-cloud-moon" id="cloudMoon"></i>
                <p class="divSuspensaModoNoturnoStatus">ligar</p>
            </div> 
            <div class="logoff" >
                <i class="fas fa-sign-in-alt"></i>
                <div class="divlogoffInf">Sair</div>
            </div>
        </section>
    </header>
    <main id="paginaPrincipal">
        <section class="abas">

                <button id="todosDicionarios" class="aba"><a class="aAba">Dicionários</a></button>
            <button id="encontrar" class="aba"><a class="aAba">Encontrar Palavra</a></button>
        </section>
        <div id="Inf">Meu Dicionário;</div>
        <section id="dados">
            <div id="divVazio">
                <img id="imgAbaVazia" src="./Assets/imagens/abaVazia.svg" alt="AbaVazia">
            <p id="infVazio">Vazio</p>
            </div>
 
            <button id="criar" class="aba"><a class="aAba">Criar novo Dicionário</a></button>

            <div id="formAdiçaoDicionario">
                <p class="infForm">Criar Novo Dicionário:</p>
                <p id="novoNome" class="infForm">Nome</p>
                <div id="divInput">
                    <form action="./TratamentoDicionario.php" method="GET">
                    <input type="text" name="Nome" required id="inputNome" >
                    <button type="submit" id="ExecutaCriaçao" ><p id="pNome">Criar</p></button>
                    </form>
                </div>
            </div>

            <?php 
               try {
                $atvBanco = new PDO("mysql:host=127.0.0.1;dbname=newword-model", "root", "password");
                $atvBanco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $atvBanco->exec('set names utf8');
                $requisiçaoLista = $atvBanco->prepare("SELECT * FROM dicionario");
                $requisiçaoLista->execute();
                $listaDicionario = $requisiçaoLista-> fetchAll(PDO::FETCH_OBJ);

            } catch (PDOException $error) {
              die('Erro de comunicaçao com servidor:' . $error->getMessage());
            }    
            ?>
        
            <section id="sectionDados">
                <section id="sectionMeusDicionarios">
                    <div id="meusDicionarios">
                        <p id="pMDicionarios">Meus dicionarios:</p>
                        <div id="divDicionariosLink">
                       
                            <div  class="divLinkDicionario" >
                                <button  class="dicionarioIconGeral" id="dicionarioIcon1">
                                    <i class="fas fa-spell-check"></i>
                                    <p id="pNameDicionario1"><?php echo"{$listaDicionario[0]->Nome}"?></p>
                                </button>
                                <i class="fas fa-check-circle" id="statusSelecionado1"></i>
                            </div>
                           
                            <div  class="divLinkDicionario" >
                                <button class="dicionarioIconGeral"  id="dicionarioIcon2" >
                                    <i class="fas fa-spell-check"></i>
                                    <p id="pNameDicionario2"><?php echo"{$listaDicionario[1]->Nome}"?></p>
                                </button>
                                <i class="fas fa-check-circle" id="statusSelecionado2"></i>
                            </div>
        
                            <div  class="divLinkDicionario" >
                                <button class="dicionarioIconGeral"  id="dicionarioIcon3" >
                                    <i class="fas fa-spell-check"></i>
                                    <p id="pNameDicionario3"><?php echo"{$listaDicionario[2]->Nome}"?></p>
                                </button>
                                <i class="fas fa-check-circle" id="statusSelecionado3"></i>
                            </div>
        
                            <div  class="divLinkDicionario" >
                                <button class="dicionarioIconGeral"  id="dicionarioIcon4" >
                                    <i class="fas fa-spell-check"></i>
                                    <p id="pNameDicionario4"><?php echo"{$listaDicionario[3]->Nome}"?></p>
                                </button>
                                <i class="fas fa-check-circle" id="statusSelecionado4"></i>
                            </div>
                            <form action="./excluirDicionario.php" method="GET">
                                <button type="submit" id="excluir" name="excluir" value= 0>Excluir</button>
                            </form>
                            
                        </div>
                    </div>

                </section>
                <section id="sectionAdiçao">
                    <form action="./indexAdicionarPalavra.php" method="POST">
                       <button name="adiciona" id="adiciona" value= 0>Adicionar palavra</button> 
                    </form>
                    
                </section>

            </section>
            </section>
    </main>

    <section id="Propaganda"> 
        <div id="area2">
            <a href="https://www.adobe.com/br/creativecloud/plans.html?sdid=GZKZY1B7&mv=display" target="blanck"><img id="img1" src="https://cdn.flashtalking.com/xre/420/4200429/2791071/image/2791071.gif?335089642" alt=""></a>
        </div>
        <div id="area1">
            <a href="https://www.amazon.com.br/prime" target="blanck"><img id="img2" src="./Assets/imagens/amazon-prime-brindes-amostras-amostra-ganhe-gratuitamente-30-dias.png" alt=""></a>
        </div>
    
        
    </section>

    <footer>
        <a href="" id="idioma" class="footerText">Idioma:Portugues</a> 
        <a href="" id="termos"  class="footerText">Termos De Uso</a>
        <p id="copyright"  class="footerText">Copyright © 2020 NewWord. All rights reserved.</p>
    </footer>

    <script src="./Assets/js/script.js"></script>
</body>
</html>