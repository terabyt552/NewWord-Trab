<?php
   if(isset($_GET["Nome"])) {
      

       try {
           $atvBanco = new PDO("mysql:host=127.0.0.1;dbname=newword-model", "root", "password");
           $atvBanco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           $atvBanco->exec('set names utf8');
           $requisiçaoLista = $atvBanco->prepare("SELECT * FROM dicionario");
           $requisiçaoLista->execute();
           $listaDicionario = $requisiçaoLista-> fetchAll(PDO::FETCH_OBJ);


           

              
           if( $listaDicionario[0]->Estado == 1) {
              $resposta = $atvBanco->prepare("UPDATE dicionario SET Nome=:nome, dat=:dat, Estado=2 WHERE idDicionario= 1");
              $resposta->bindValue(':nome', $_GET["Nome"]);
              $resposta->bindValue(':dat', date("Y-m-d"));
              $resposta->execute();
            }else {
              if( $listaDicionario[1]->Estado == 1) {
                $resposta = $atvBanco->prepare("UPDATE dicionario SET Nome=:nome, dat=:dat, Estado=2 WHERE idDicionario= 2");
                $resposta->bindValue(':nome', $_GET["Nome"]);
                $resposta->bindValue(':dat', date("Y-m-d"));
                $resposta->execute();
              }else {
                if( $listaDicionario[2]->Estado == 1) {
                  $resposta = $atvBanco->prepare("UPDATE dicionario SET Nome=:nome, dat=:dat, Estado=2 WHERE idDicionario= 3");
                  $resposta->bindValue(':nome', $_GET["Nome"]);
                  $resposta->bindValue(':dat', date("Y-m-d"));
                  $resposta->execute();
                }else {
                  $resposta = $atvBanco->prepare("UPDATE dicionario SET Nome=:nome, dat=:dat, Estado=2 WHERE idDicionario= 4");
                  $resposta->bindValue(':nome', $_GET["Nome"]);
                  $resposta->bindValue(':dat', date("Y-m-d"));
                  $resposta->execute();
                }
              }
            }
       } catch (PDOException $error) {
         die('Erro de comunicaçao com servidor:' . $error->getMessage());
       }

       header("location:./index.php?status=novoDicionarioAcrescentado={$_GET['Nome']}");
   }
?>
