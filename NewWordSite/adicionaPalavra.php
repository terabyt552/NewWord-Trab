<?php 
    
       try {
           $atvBanco = new PDO("mysql:host=127.0.0.1;dbname=newword-model", "root", "password");
           $atvBanco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           $atvBanco->exec('set names utf8');
           $resposta = $atvBanco->prepare("INSERT INTO dadosdicionario(palavra, Significado, dicionario_idDicionario) VALUES(:palavra, :significado, :idDicionario)");
           $resposta->bindValue(':palavra', $_GET['palavra']);
           $resposta->bindValue(':significado', $_GET['significado']);
           $resposta->bindValue(':idDicionario', $_GET['idDicionarioButtonRegistra']);
           $resposta->execute();

       } catch (PDOException $error) {
         die('Erro de comunicaçao com servidor:' . $error->getMessage());
       }

       header("location:./index.php?status=Palavra{$_GET['palavra']}Adicionada;");
    
    
?>