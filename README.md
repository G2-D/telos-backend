<h1 align="center">
Telos Back End
</h1>

<p align="center">Aplicação Rest Full voltada para serviços de hotelaria</p>
<br><br><br><br>
<hr />

## Começando

1. Clone este repositório usando `git clone https://github.com/G2-D/telos-backend.git`
2. Mova-se para o diretório apropriado: `cd telos-backend` <br />
3. Execute `yarn` para instalar as dependências <br />
4. Execute `docker-compose up -d` para instalar o SGBD postgres e criar o banco de dados.
5. Execute `yarn typeorm migrations:run` para executar as migrations e criar todas as dependencias do banco de dados.
5. Execute `yarn start:local` para executar a aplicação.
5. Para concluir o seu servidor está rodando em http://localhost:3000/.
