
<div id="divListaPalavras">
    <?php  
    try {
    $atvBanco = new PDO("mysql:host=127.0.0.1;dbname=newword-model", "root", "password");
    $atvBanco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $atvBanco->exec('set names utf8');
    $requisiçaoLista = $atvBanco->prepare("SELECT * FROM  dadosdicionario");
    $requisiçaoLista->execute();
    $listaPalavras = $requisiçaoLista-> fetchAll(PDO::FETCH_OBJ);

    if ( $_POST['selecionar'] == 1) {
     
        for ($i=0; $i < count($listaPalavras); $i++) { 

            $idDicionario = $listaPalavras[$i]->dicionario_idDicionario;

            if($idDicionario == 1) {

                echo "  <div class=divPrincipal>
                            <p class=palavra>{$listaPalavras[$i]->palavra}:</p>
                            <p class=significado>{$listaPalavras[$i]->Significado}</p>
                            <form action=./excluirPalavra.php method=GET>
                            <button class=buttonExcluir name=excluir value={$listaPalavras[$i]->idDadosDicionario}>excluir</button>
                            </form>
                        </div>"; 

            }

        }
        
    }else {
       
    if ( $_POST['selecionar'] == 2) {

        for ($i=0; $i < count($listaPalavras); $i++) { 

            $idDicionario = $listaPalavras[$i]->dicionario_idDicionario;

            if($idDicionario == 2) {

                echo "  <div class=divPrincipal>
                            <p class=palavra>{$listaPalavras[$i]->palavra}:</p>
                            <p class=significado>{$listaPalavras[$i]->Significado}</p>
                            <form action=./excluirPalavra.php method=GET>
                            <button class=buttonExcluir name=excluir value={$listaPalavras[$i]->idDadosDicionario}>excluir</button>
                            </form>
                        </div>"; 

            }

        }
        
    }else {

        if ( $_POST['selecionar']== 3) {

            for ($i=0; $i < count($listaPalavras); $i++) { 

                $idDicionario = $listaPalavras[$i]->dicionario_idDicionario;
                
                if($idDicionario == 3) {

                    echo "  <div class=divPrincipal>
                                <p class=palavra>{$listaPalavras[$i]->palavra}:</p>
                                <p class=significado>{$listaPalavras[$i]->Significado}</p>
                                <form action=./excluirPalavra.php method=GET>
                            <button class=buttonExcluir name=excluir value={$listaPalavras[$i]->idDadosDicionario}>excluir</button>
                            </form>
                            </div>"; 

                }

            }

        }else {
           

                for ($i=0; $i < count($listaPalavras); $i++) { 
        
                    $idDicionario = $listaPalavras[$i]->dicionario_idDicionario;
        
                    if($idDicionario == 2) {
        
                        echo "  <div class=divPrincipal>
                                    <p class=palavra>{$listaPalavras[$i]->palavra}:</p>
                                    <p class=significado>{$listaPalavras[$i]->Significado}</p>
                                    <form action=./excluirPalavra.php method=GET>
                            <button class=buttonExcluir name=excluir value={$listaPalavras[$i]->idDadosDicionario}>excluir</button>
                            </form>
                                </div>"; 
        
                    }
                }              
            }
        }
    }
} catch (PDOException $error) {
  die('Erro de comunicaçao com servidor:' . $error->getMessage());
}

  
?> 
</div>
