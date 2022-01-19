# <img src="assets\icons\dart.svg" width = "24">  Dart Study Studio

Este projeto foi desenvolvido em resposta a necessidade de padronizar o conteúdo inserido no [Dart Study](https://github.com/JosManoel/Dart-Study) de forma simples, através da criação de banners e shields para os materiais produzidos. O repositório original, o Dart Study, conta com diversos artigos sobre a utilização do Dart para o desenvolvimento multiplataforma em português, aliados a exemplos interativos com o [DartPad](https://dartpad.dev/?null_safety=true).

## 🖥️ Interface

A interface do Dart Study Studio é dividida em dois setores: a tela de preview, que permite visualizar o banner antes de realizar o download, e o setor de edição, onde é realizada a modificação do banner e do shield.

### 👀 Preview 

A tela de preview possui a missão de permitir a visualização do banner, bem como sua formatação no arquivo de texto, simulando uma tela de "README", que pode ser alterada conforme o tela selecionado no _theme mode_. 


> Cacilds, os elementos textuais utilizados como base para a tela de preview foram inteiramente retidados do [Mussum Ipsum](https://mussumipsum.com/).

<p align = "center">
<img src="assets\images\preview.png">
</p>

### 🎨 Theme Mode

O banner pode possuir qualquer combinação de cores, indo de uma cor sólida até uma combinação em um gradiente de dois tons. No entanto, a utilização de diversas cores pode prejudicar a visualizando do banner, dependendo do tema escolhido para o GitHub pelo usuário. Pensando numa maior acessibilidade, o editor possui 3 dos 5 temas suportados pelo GitHub, sendo eles o _Light default_, _Dark dimmed_ e _Dark default_. Deste modo, é possível verificar não somente a visualização do banner, como também seu estado em meio a pagina num todo.

<p align = "center">
  <img src="assets\images\theme_mode.png"/>
</p>

### 🛠️ Editor

O editor é dividido em dois segmentos: o _Banner Editor_ e o *_artpad Shield Editor_. Cada segmento possui suas respectivas opções de edição, conforme a necessidade do banner ou shield, incluindo um contador de caracteres, visto que, devido ao formato e ambiente em que o banner e o shield são utilizados, se fez necessário limitar a quantidade de caracteres, para impedir que um grande volume de texto nos respectivos elementos prejudiquem a experiência de aprendizado do leitor. Deste modo, durante a atulização do Dart Study Studio, deve-se considerar uma abordagem mais resumida para os títulos do banner e shield.

<p align = "center">
  <img src="assets\images\banner_editor.png"/>
</p>

* ### ✒️ Banner Editor

    O Banner Editor é dividido em 3 áreas, onde é possível adicionar um título, uma imagem para o banner e customizar as cores do texto e de background, que podem ser modificadas através do seletor de cores, com o color picker, ou utilizando um código hexadecimal.

    > Caso o autor opte por apenas uma tonalidade de cor, deve-se adicionar a mesma tonalidade no seletor de cor primário e secundário. Este pequeno problema será resolvido em futuras versões.

    Deste modo, o resultado final se assemelha a este banner:
    
    <p align = "center">
      <img src="assets\images\banner.png"/>
    </p>


* ### ✒️ Dartpad Shield Editor

    Por uma necessidade de tornar o conteúdo mais interativo surgiu a prática de compartilhar os códigos utilizados como exemplos nos artigos através do DartPad, que permite executar e editar o algorítimo escrito em dart diretamente na web. Deste modo, para auxiliar no compartilhamento, surgiu o DartPad Shield, que funciona como um pequeno "botão", acompanhado de uma frase, que leva o leitor ao código compartilhado no DartPad, para realizar seus próprios testes. 

    A frase que acompanha o DartPad Shield pode ser editada através de uma caixa de texto presente no _DartPad Shield Editor_, levando o título do código que será executado ou outra mensagem que o autor julgue apropriada.

    <p align = "center">
      <img src="assets\images\shield.png" height="24"/>
    </p>

## 🏗️ Futuras atualizações

- [ ] Implementação do layout mobile;
- [ ] Correção do redimensionamento de imagens;
- [ ] Implementação da escolha de uma ou múltiplas cores para o banner;
- [ ] Aprimoramento da customização do Shield Editor.

## 📚 Leitura e links recomendado:
* [📝 Dart - Documentação](https://dart.dev/guides)
* [🎯 Dart Study](https://github.com/JosManoel/Dart-Study)
* [🎯 DartPad](https://dartpad.dev/)

***
## 🧾Licença:
Este projeto está sob a licença [Apache 2.0](https://github.com/JosManoel/Dart-Study_Studio/blob/main/LICENSE).

*** 
<div align = "center">

  👋 Feito por [JosManoel](https://github.com/JosManoel) com ☕ , 🎧 e 💻.

</div>