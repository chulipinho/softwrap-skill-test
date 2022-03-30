# Softwrap Skill Test

Aplicação web desenvolvida para o teste prático da [Softwrap](https://softwrap.com.br/).



Acesse a [live preview](https://softwrap-skill-test.web.app/) da página.

______________________________

## Índice

- [Sobre](#sobre)

- [Como usar](#como-usar)
  
  - [Adicionando uma entrada](#adicionando-uma-entrada)
  
  - [Excluindo uma entrada](#excluindo-uma-entrada)
  
  - [Editando uma entrada](#editando-uma-entrada)
  
  - [Outras funcionalidades](#outras-funcionalidades)

- [Tecnologias utilizadas](#tecnologias-utilizadas)

- [Desenvolvido por](#desenvolvido-por)

----------------

## Sobre

Aplicação web desenvolvida em [React](https://pt-br.reactjs.org/) com Realtime Database do [Firebase](https://firebase.google.com/?hl=pt). Possui um CRUD com registro de pessoas. A interface é simples e intuitiva e permite que todas as ações sejam executadas. Todos os componentes foram implementados utilizando o framework do [Tailwind](https://tailwindcss.com/) e componentes das bibliotecas [TailwindUI](https://tailwindui.com/) e [TailwindComponents](https://tailwindcomponents.com/). Os icones vêm da biblioteca [React Icons](https://react-icons.github.io/react-icons/).

As entradas da tabela possuem os seguintes atributos:

- Nome
- Idade
- Estado civil
- CPF
- Cidade
- Estado

A página está hospedada através do serviço de hosting do Firebase e pode ser acessada por [aqui](https://softwrap-skill-test.web.app/).

_________

## Como usar

### Adicionando uma entrada

Para adicionar uma entrada na tabela, basta clicar no botão flutuante no canto inferior direito da tela. Para melhorar a experiencia do usuário optou-se por um modal com um formulário que aparecerá com os campos necessários para a adição de uma nova entrada. O modal foi também uma opção com o objetivo de não aumentar o nível de complexidade da aplicação de forma desnecessária, mantendo a lógica de uma *single page application*. Os campos são validados quando o usuário envia os dados utilizando as bibliotecas do [Unform](https://unform-rocketseat.vercel.app/quick-start) e do [Yup](https://www.npmjs.com/package/yup). Para o CPF utiliza-se uma máscara implementada em [RegEx](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions).

### Excluindo uma entrada

Cada uma das linhas da tabela possui um botão de exclusão e um botão de edição. Ao clicar no botão de exclusão, um alerta aparecerá confirmando a decisão do usuário e então a entrada será excluída, caso a operação não seja cancelada. 

Para que a remoção de items seja executada, utiliza-se a chave da entrada gerada automaticamente pelo Firebase quando um novo dado é adicionado na tabela. Cada uma das linhas da tabela recebe essa chave como parâmetro, então o botão de exclusão pode facilmente acessar a entrada a ser removida.

### Editando uma entrada
 
Para atualizar um dado no Firebase, identifica-se a entrada a ser alterada pelo identificador citado anteriormente. Essa entrada é sobreescrita com os novos valores inseridos pelo usuário. Para permitir as alterações, foi implementado um formulário nas linhas da tabela, sem a utilização do [Unform](https://unform-rocketseat.vercel.app/quick-start).

Ao clicar no botão de edição, os campos da tabela se tornarão campos editáveis, já preenchidos com os dados da entrada selecionada. 

Ao entrar no modo edição, os botões da linha serão substituídos. O botão de edição se tornará um botão de confirmação que valida os dados seguindo a mesma lógica definida anteriormente no [Yup](https://www.npmjs.com/package/yup) e caso a entrada seja validada, uma mensagem irá confirmar a atualização dos dados no banco de dados. O botão de exclusão, apesar de manter a aparência, muda sua funcionalidade e passa a cancelar a operação de edição. Essa ação também irá gerar um alerta de confirmação na tela. 

### Outras funcionalidades

A paginação da tabela é feita através do front-end e permite alterar o número de entradas por página através do seletor no canto superior direito da tabela. Todas variáveis do estado de paginação são gerenciadas através do [Redux](https://redux.js.org/) e foram implementados Hooks para melhorar a eficiencia e legibilidade do código.

O banco de dados é instanciado através de um singleton e possui tem todas suas funcionalidades implementadas dentro dessa instância.

___________________

## Tecnologias utilizadas

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

- [React](https://pt-br.reactjs.org/) v17.0.2

- [Redux](https://redux.js.org/) v4.1.2

- [Unform](https://unform-rocketseat.vercel.app/quick-start) v2.1.6

- [Yup](https://www.npmjs.com/package/yup) v0.32.11

- [Tailwind](https://tailwindcss.com/) v3.0.23

- [Firebase](https://firebase.google.com/?hl=pt) v9.6.9

__________________________

## Desenvolvido por:

Fellipe Luz Souza Machado

fellipe.luz.machado@gmail.com



[LinkedIn](https://www.linkedin.com/in/fellipe-luz-souza-machado-32aa1122a/)

[GitHub](github.com/chulipinho)




