 <?php  

    try {
    $atvBanco = new PDO("mysql:host=127.0.0.1;dbname=newword-model", "root", "password");
    $atvBanco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $atvBanco->exec('set names utf8');
    $requisiçao = $atvBanco->prepare("DELETE FROM dadosdicionario WHERE idDadosDicionario = {$_GET['excluir']}");
    $requisiçao->execute();

} catch (PDOException $error) {
  die('Erro de comunicaçao com servidor:' . $error->getMessage());
}

header("location:./index2.php?status=PalavraDeletada;");

?> 
