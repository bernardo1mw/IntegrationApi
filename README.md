Este projeto implementa um servidor de API REST utilizando NodeJs e NestJs, retornando dados de usuários após aplicar transformações específicas, como ofuscação de e-mails e formatação de datas, conforme requisitos detalhados abaixo.

Tecnologias Utilizadas
NodeJs
NestJs
Axios (para requisições HTTP)
Jest (para testes unitários)
Supertest (para testes de integração)

Pré-requisitos
Node.js instalado na máquina local
Arquivo .env configurado (como em .env.example)

Instalação
Clone o repositório para a sua máquina local:

bash
Copiar código
git clone <URL_DO_REPOSITORIO>
Instale as dependências do projeto:

bash
Copiar código
cd <NOME_DO_DIRETORIO>
npm install
Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias:

env
Copiar código
API_URL=http://localhost:3000
Execução
Para iniciar o servidor:

bash
Copiar código
npm start
O servidor estará disponível em http://localhost:3001.

Testes
Execute os testes unitários e de integração:

bash
Copiar código
npm test
Detalhamento das Funcionalidades
Obfuscação de E-mail
Os e-mails são ofuscados com base nas seguintes regras:

Se o domínio for niuco.com.br, o e-mail não é ofuscado.
Se o domínio for diferente de niuco.com.br, apenas os primeiros e últimos 2 caracteres do alias são visíveis, com o restante substituído por asteriscos.
Exemplos:

joao.silva@niuco.com.br → joao.silva@niuco.com.br
maria.oliveira@gmail.com → ma**\*\*\*\***a@gmail.com
Formatação de Data
A data da última atividade dos usuários é fornecida pela API em formato Unix Epoch e é convertida para o padrão ISO-8601 considerando o fuso horário UTC de Brasília.

Verificação de Status de Pagamento e Atividade
Os usuários têm seus status verificados com base nos seguintes critérios:

Atividade: Determinada pelo campo status da API. Usuários com status igual a disabled são considerados inativos.
Pagamento: Determinado pelo campo role da API. As regras são:
viewer, system: não pagantes
editor, admin: pagantes, a menos que o usuário esteja inativo.
Pipeline CI/CD
Foi configurado um pipeline CI/CD usando GitHub Actions para garantir a integração e entrega contínua do projeto. O pipeline inclui as seguintes etapas:

Checkout do código
Configuração do ambiente Node.js
Instalação das dependências
Execução de linting
Execução de testes
Criação da build
