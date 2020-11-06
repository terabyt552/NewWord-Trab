<?php 
    
       try {
           $atvBanco = new PDO("mysql:host=127.0.0.1;dbname=newword-model", "root", "password");
           $atvBanco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           $atvBanco->exec('set names utf8');
           $resposta = $atvBanco->prepare("UPDATE dicionario SET Nome=:nome, Estado=1 WHERE idDicionario= :excluir");
           $resposta->bindValue(':nome', 'Vazio');
           $resposta->bindValue(':excluir', $_GET['excluir']);
           $resposta->execute();

       } catch (PDOException $error) {
         die('Erro de comunicaçao com servidor:' . $error->getMessage());
       }

       header("location:./index.php?status=Dicionario{$_GET['excluir']}Deletado;");
    
    
?>
