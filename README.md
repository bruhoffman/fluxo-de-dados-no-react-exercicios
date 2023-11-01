# Fluxo de Dados

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template!

Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: https://codesandbox.io/s/fluxo-de-dados-feedback-jtuj5e

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

Hoje vimos que o gerenciamento de estado precisa ser pensado de uma forma que seja possível compartilhar dados entre todos os componentes da nossa aplicação. Às vezes precisamos modificar toda a estrutura de estados para que seja possível resolver certos problemas de props, já que só podemos passar props de pai pra filho.

Nas práticas vocês conseguiram trabalhar essa movimentação do estado para um nível superior e agora vamos continuar exercitando essa lógica.

# Exercício 1

Vamos praticar uma análise mais crítica do aplicativo.<br>
1. Baixe o código e leia-o código cuidadosamente. Durante a leitura, seu objetivo é identificar os diversos componentes que compõem o projeto e qual a relação entre eles(quem é filho? quem é pai?).
2. Com base na leitura do código, desenhe a estrutura da árvore de componentes. Isso significa que você deve representar graficamente a relação hierárquica entre os diferentes componentes do aplicativo, destacando quais são os "componentes-pais" e seus "componentes-filhos"
3. Para criar a imagem, você pode usar o [draw.io](https://app.diagrams.net/) ou qualquer outra ferramenta que ajude a desenhar. Pode ser à mão, usando lápis e papel, por exemplo.
A imagem a seguir é um exemplo aleatório de uma estrutura de uma árvore de componentes: ![image](https://user-images.githubusercontent.com/29845719/230494751-9d1a20c3-a654-4a49-b012-1cea2015e92c.png)


# Exercício 2

Garanta que a edição dos campos do formulário reflitam nos valores do menu do perfil (menu lateral esquerdo).<br>
Não se preocupe em implementar o uso do botão, faça tudo funcionar automaticamente por enquanto:
- digita no input, atualiza automaticamente o menu lateral

# Exercício 3

Agora que tudo está integrado, refatore e faça com que a atualização aconteça apenas quando o botão for clicado.


* Veja no exemplo abaixo o resultado final esperado:

https://github.com/labenuexercicios/fluxo-de-dados-no-react-exercicios/assets/71137294/5dabeac8-24a9-4202-a546-188ff62fd978


