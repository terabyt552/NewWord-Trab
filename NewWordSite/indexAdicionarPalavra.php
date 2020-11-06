<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="./Assets/style/adicionarPalavraStyle.css">
    <link rel="stylesheet" href="./Assets/fontvendor/css/all.css">
</head>
<body>
    
</body>
</html>



<body>
    <form action="./adicionaPalavra.php" method="GET" id="formAdiciona">
        <div id="divAFechar">
            <a href="./index.php
            "><i class="fas fa-times-circle"  id="buttonCancelaAdicionaPalavra"></i></a>
        </div>
        <div id="insereDados">
            <p id="pInf">Informe Dados:</p>
            <p class="pFormAdiciona">Palavra</p>
        <input required id="inputPalavra" name="palavra">
        <p class="pFormAdiciona" id="pFormAdicionaId">significado</p>
        <textarea cols="50" rows="10"  wrap="hard" required maxlength="500" id="inputDescricao" name="significado"></textarea>
        </div>
        <button id="enviaPalavra" name="idDicionarioButtonRegistra" value= <?php echo "{$_POST['adiciona']}";?>>Registrar</button>
    </form>
</body>