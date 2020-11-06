<?php $controlRecal = 0;

 if(isset($_POST["selecionar"])) {
    $controlRecal = 1;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NewWord</title>
    <meta name="author" content="Lucas Pereira">
    <link rel="stylesheet" href="./Assets/style/style2.css">
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
            <a class="aHeader"id="aHeader"><p class="subTitulo" id="pReg">Meus Registros</p></a>
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
    






    <main id="MeusRegistros">

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


        <section id="sectionDicionarios">

        
        <div  class="divLinkDicionarioRegistros" >
            <button  class="dicionarioIconGeralRegistros" id="dicionarioIcon1Registros">
                <i class="fas fa-spell-check"></i>
                <p id="pNameDicionario1Registros"><?php echo"{$listaDicionario[0]->Nome}"?></p>
            </button>
            <i class="fas fa-check-circle" id="statusSelecionado1Registros"></i>
        </div>
       
        <div  class="divLinkDicionarioRegistros" >
            <button class="dicionarioIconGeralRegistros"  id="dicionarioIcon2Registros" >
                <i class="fas fa-spell-check"></i>
                <p id="pNameDicionario2Registros"><?php echo"{$listaDicionario[1]->Nome}"?></p>
            </button>
            <i class="fas fa-check-circle" id="statusSelecionado2Registros"></i>
        </div>

        <div  class="divLinkDicionarioRegistros" >
            <button class="dicionarioIconGeralRegistros"  id="dicionarioIcon3Registros">
                <i class="fas fa-spell-check"></i>
                <p id="pNameDicionario3Registros"><?php echo"{$listaDicionario[2]->Nome}"?></p>
            </button>
            <i class="fas fa-check-circle" id="statusSelecionado3Registros"></i>
        </div>

        <div  class="divLinkDicionarioRegistros" id="divLink4" >
            <button class="dicionarioIconGeralRegistros"  id="dicionarioIcon4Registros">
                <i class="fas fa-spell-check"></i>
                <p id="pNameDicionario4Registros"><?php echo"{$listaDicionario[3]->Nome}"?></p>
            </button>
            <i class="fas fa-check-circle" id="statusSelecionado4Registros"></i>
        </div>
        <form action="./index2.php" method="POST" id="formAdic">
        <button id="selecionar" type="submit" name="selecionar" value= 0>Selecionar</button>
        </form>
        </section>
    
  
   <div>
      <?php 
      if(   $controlRecal == 1 ) {
         include 'listaPalavras.php';
         
         $controlRecal = 0;
      }
      ?>
   </div>

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

    <script src="./Assets/js/script2.js"></script>
</body>
</html>