## API do Balcão de Ofertas
Esta é uma API RESTful para o Balcão de Ofertas, um aplicativo que permite aos usuários listar, criar e excluir ofertas de moedas.

## Pré-requisitos
Certifique-se de ter o seguinte instalado em sua máquina:

Node.js (versão 12 ou superior)
PostgreSQL
Configuração do Banco de Dados
Crie um banco de dados no PostgreSQL para o Balcão de Ofertas. Você pode usar o nome "balcao" ou escolher um nome de sua preferência.

Dentro do diretório do projeto, navegue até o arquivo config/dbConfig.js e abra-o.

Verifique se as configurações do banco de dados (usuário, senha, host, porta) estão corretamente preenchidas de acordo com a configuração do seu ambiente local.

Execute o seguinte comando no terminal para instalar as dependências do projeto:

bash
Copy code
npm install
Execute o seguinte comando no terminal para criar as tabelas necessárias no banco de dados:

bash
Copy code
npm run migrate
Executando a API
Após a conclusão da instalação e configuração, execute o seguinte comando no terminal para iniciar o servidor:

bash
Copy code
npm start
A API será executada localmente na porta 3000. Você poderá acessá-la em http://localhost:3000.

## Uso da API
A API possui os seguintes endpoints disponíveis:

GET /offers: Retorna todas as ofertas disponíveis.
POST /offers: Cria uma nova oferta. Envie um JSON com os campos walletId, coinId, price e quantity.
DELETE /offers/:offerId: Exclui uma oferta com base no ID fornecido.
Certifique-se de usar uma ferramenta como o Postman para testar os endpoints da API.

## Contribuição
Se você quiser contribuir para o desenvolvimento deste projeto, fique à vontade para fazer um fork e enviar suas sugestões através de pull requests.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.