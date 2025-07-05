# Projeto gridIA - Backend

Este é o backend do projeto gridIA, uma plataforma para automação de conteúdo para Instagram.

## Serviço de IA Utilizado

- **Serviço:** Stability AI
- **Modelo:** Stable Diffusion (via API)
- **Justificativa:** A Stability AI foi escolhida por oferecer um plano de créditos gratuitos que permite o desenvolvimento e teste sem a necessidade de um cartão de crédito ou pré-pagamento, removendo uma barreira significativa para a prototipação.

## Como Rodar o Projeto

1. Instale as dependências: `npm install`
2. Crie um arquivo `.env` na raiz.
3. Adicione sua chave da API da Stability AI no arquivo `.env`:
   `STABILITY_API_KEY="sk-sua-chave-aqui"`
4. Execute o script de teste: `node NOME_DO_ARQUIVO.js`