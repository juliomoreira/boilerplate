# Boilerplate

Meu querido conjunto de arquivos para iniciar projetos com rapidez, agora disponível aqui no github pra quem tiver interesse! Fique à vontade para enviar pull-requests ou dar um fork.

----------

## Estrutura de conteúdo do CSS

### A pasta "Commons"

A pasta **commons** é utilizada para estilos que são comuns em praticamente todas as páginas da aplicação, como header, footer e outros comportamentos gerais como botões, títulos, formulários e tudo mais que houver em um possível guia visuail. Eu costumo fragmentar esses conteúdos em vários arquivos.

**Sugestão**

* header.styl
* footer.styl 
* main.styl
* buttons.styl
* etc.

### A pasta "Partials"

A pasta **partials** contém arquivo(s) de variáveis e outro com mixins. Um arquivo para construção de grid pode ser inserido nessa pasta.

**Sugestão:**

* vars.styl
* mixins.styl
* etc.

### A pasta "Pages"

É utilizada para conteúdo específico de página. Como utilizo uma classe na tag <kbd>body</kbd> o arquivo possui todo conteúdo declarado após o seletor <kbd>body.classe-da-pagina</kbd>.

**Sugestão:**

* page-home.styl
* page-404.styl
* page-contato.styl
* etc.

Dentro das pastas já existem alguns exemplos. ;)

Instalando o node e as dependências do projeto
---------

Além de ter o [node.js](https://nodejs.org/download/) instalado no seu computador, para rodar o gulp e outros módulos de node que são utilizados para compilar os arquivos stylus em CSS você precisará rodar um comando no terminal, que utilizará o conteúdo do arquivo package.json para salvar as dependências na pasta.

<kbd>npm install</kbd>

Pronto! Agora você já tem tudo que precisa pra compilar os arquivos.

Compilando o stylus
---------
O gulp é responsável por compilar os arquivos .styl das pastas de CSS e juntar todo conteúdo deles dentro de um arquivo chamado **dist.css**, que fica dentro da pasta **assets/dist**.

No terminal, execute o comando <kbd>gulp</kbd>. Ele executará o processo que gera o arquivo dist.css e fechará a stream.

Caso queira gerar o dist.css e **manter o gulp acompanhando as alterações no arquivo**, execute a função <kbd>gulp task_watch</kbd>.
