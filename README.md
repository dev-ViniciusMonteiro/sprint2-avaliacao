# Avaliação Sprint 2

A avaliação será realizada pela entrega de uma API seguindo o padrão REST que deverá realizar as operações básicas de CRUD e duas consultas por atributos, totalizando assim quatro consultas: Todos os itens, um item e duas pesquisas por atributos.

As pesquisas com retorno de múltiplos itens devem oferecer paginação, ou seja, limite número de registros por requisição e páginas de acordo com esse retorno, o número da página deve ser passada por query param e o retorno deve conter a query param de requisição da próxima página e da página anterior se houver, nos atributos next e prev. Ex:
{
    "items": [
        {
            "name": "Teste"
        }
    ],
    "next": "page=3",
    "prev": "page=1"
}

As aplicações deverão aceitar dados em formato JSON e retornar JSON. Adicionalmente durante o desenvolvimento deve se levar em conta boas práticas de segurança em relação a proteção contra o cadastro de dados maliciosos, é permitido o uso de ORMs para interagir com o banco de dados.

O SGBD que deverá ser utilizado nas aplicações é o MySQL.

Cada uma das funcionalidades deverão ser construídas em branches distintas, por exemplo uma branch para a remoção de registros e outra para a inserção, ao final do desenvolvimento dessas branches deverá ser feito o merge delas em uma branch principal criada pelo desenvolvedor não a master do repositório, após a conclusão da aplicação deverá ser aberto um PR (Pull Request) do que foi desenvolvido  para a branch main. 

O prazo para a entrega é dia 23/05/2021 às 23:59. Considera-se como entrega a abertura do PR para o repositório disponibilizado.

# Relação dev - pasta:
- BrenoCore: 6
- dev-ViniciusMonteiro: 3
- etn-43: 2
- GustavoCarlini: 4
- leoaugusto02: 1
- leonardosantos1: 5
