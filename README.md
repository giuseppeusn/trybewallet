# Trybewallet

## Projeto

Trybewallet é um projeto Front-end para ser uma carteira de controle de gastos com conversor de moedas (API). O usuário que utilizar a aplicação deve primeiramente fazer login e em seguida tem acesso para manipular suas despesas, podendo adicionar, remover e editar uma despesa.

## Desenvolvido utilizando
> React, Redux, Tailwind CSS, CSS3, HTML5, ES6

## Funcionamento

Feita a autenticação, o usuário tem acesso a aplicação podendo preencher os dados da despesa dando uma descrição, uma categoria, um método de pagamento, um valor e tipo de moeda que foi utilizado.

Ao clicar em "adicionar despesa", uma nova despesa é adicionada na tabela com as informações preenchidas pelo usuário, o câmbio utilizado e a conversão feita com o câmbio recebido por uma API de conversão de moedas.

Após adicionado, o usuário ainda pode editar as informações que foram preenchidas previamente por ele ou remover completamente uma despesa.

## Deploy

Link para o [deploy](https://giuseppeusn.github.io/trybewallet)

#### ⚠️ Importante!

Para acessar a aplicação, é necessário fazer login. Não há validação, precisa apenas ser um email e uma senha de seis dígitos

Exemplo:
```
Email: example@example.com
Senha: 123456
```

## Instalando dependências e executando o projeto
Para visualizar o projeto localmente:
- Clone o projeto
- Entre no diretório `trybewallet/`
- Rode o comando `npm install` para instalar
- Rode o comando `npm start` para iniciar
