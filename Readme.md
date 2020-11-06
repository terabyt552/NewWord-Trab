| O site tem como objetivo permitir que o usuario monte seu proprio dicionario, seja por motivos de estudos ou por motivos filosoficos.



|Sql:
O sql está montado em 2 entidades(dadosdicionario e dicionario):

O dicionario é uma entidade com uma limitaçao de até 4 dicionario adicionados, sendo que nao necessariamente sao adicionados. Essa entidade vem com 4 valores de nome já definidos como: Dicionario1, Dicionario2...Dicionario4. Esses valores podem ser atualizados pelo usuario com o uso do UPDATE, para apagar um dicionario não é usado DELETE, os dados sao apenas atualizados novamente para o padrão(dicionario1...dicionario4).OS dicionarios também são listados na pagina para que o usuario possa seleciona-los.



Ja dadosdicionarios funciona um pouco diferente, as palavras podem ser adicionadas sem nenhum limite tudo que vc precisa fazer é selecionar em qual dos seus dicionarios vc quer adicionar a palavra e clicar em 1 botão.Todas essas palavras também vão ser listadas na aba de registros assim que vc escolher o dicionario, as mesmas também podem ser excluidas(aqui elas são realmente excluidas).



A pagina está de facil entendimento, o codigo também.São alguns arquivos:

index.php: Pagina Principal com iterface;

index2.php: Pagina secundaria com interface, que surgi depois de apertar o botao registros do index.php, é nela que aparece a lista de palavras do dicionario selecionado.

adicionaPalavra.php: È o arquivo que tem como funçao receber uma requisiçao e fazer um envio ao servidor para adicionar uma palavra a um dicionario especifico.

indexAdicionaPalavra.php:È uma pagina que tem interface, onde é mostrado somente uma tabela com nome e significado e um botao que vai chamar o arquivo adicionaPalavra.php e também um butao que volta para a pagina principal.

TratamentoDicionario.php: È um arquivo que revebe um envio por formulario do arquivo index.php onde se tem um nome para um novo dicionario que vai ser adicionado apartir desse arquivo.

excluirDicionario.php e excluirPalavra.php: quando um botao de excluir é clicado se estiver na area do index2.php ele chama o arquivo excluirPalavra.php, na area do index.php o botao chama excluirDicionario.php.

listaPalavras.php: Este arquivo tem uma interface que é montada apartir de dados retornados do banco de dados(palavra e significado).

Pode haver algumas funções na tela que nao funcionem por serem meramente ilustrativas já que o site não vai ter uso real;

####No banco de dados os dicionarios tem uma data de adição que serve apenas para manter a organizaçao no server.