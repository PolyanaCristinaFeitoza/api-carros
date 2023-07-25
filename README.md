## <div align="center"> API com Node JS e Mysql, criando um CRUD completo do zero. </div>

# Pré-requisitos

Certifique-se de que você possui os seguintes pré-requisitos instalados em seu sistema:

- Node.js: Acesse o site oficial (__https://nodejs.org/__) para baixar e instalar a versão LTS (Long Term Support) mais recente do Node.js.

- MySQL: Instale o servidor MySQL em seu sistema ou utilize um servidor remoto. Lembre-se de anotar as credenciais de acesso ao banco de dados (host, usuário, senha, nome do banco de dados) para a configuração posterior.

# Clonar o repositório

Clone o repositório do projeto para o seu ambiente local. Você pode usar o comando git clone no terminal.

``` bash
git clone https://github.com/PolyanaCristinaFeitoza/api-carros.git
```

# Instalar as dependências

Navegue até o diretório do projeto no terminal e instale as dependências. Use o seguinte comando:

``` bash
npm install
```

Isso instalará todas as dependências necessárias para executar o projeto.

# Configuração do Banco de Dados

Certifique-se de incluir o host, usuário, senha e nome do seu banco de dados ao arquivo __variaveis.env__. Exemplo:

``` bash
DB_HOST = host
DB_USER = seu_usuario
DB_PASS = sua_senha
DB_NAME = nome_do_banco_de_dados
```

# Inicialização do Servidor

Agora, você pode iniciar o servidor para testar a API com o seguinte comando:

``` bash
npm start
```

Se o servidor for iniciado com sucesso, você verá uma mensagem indicando que o servidor está em execução e ouvindo em uma porta específica.

# Testar a API

Com o servidor em execução, você pode testar a API usando ferramentas como o Postman ou o Insomnia. Envie requisições HTTP para os endpoints definidos na API para criar, ler, atualizar e deletar registros no banco de dados MySQL.
