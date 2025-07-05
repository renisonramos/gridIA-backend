# gridIA - Backend

## Visão Geral do Projeto

O **gridIA** é uma plataforma SaaS (Software as a Service) projetada para automatizar a criação de conteúdo para Instagram, focada em pequenos e médios empreendedores. Nosso objetivo é simplificar a criação de marketing estratégico e visualmente coeso, que muitas vezes é um desafio para quem não tem tempo, orçamento ou conhecimento em design e marketing.

### Problema Resolvido

Pequenos empreendedores frequentemente lutam para criar conteúdo de marketing visualmente consistente e engajador para o Instagram devido a limitações de tempo, orçamento e conhecimento técnico/criativo.

### Solução

Uma aplicação web onde o usuário fornece três informações-chave sobre seu negócio (segmento, público-alvo, tom de comunicação). O backend do gridIA processa essas informações, utiliza modelos de IA generativa para criar um conjunto de **9 posts** (imagens e legendas) que formam uma grade de Instagram coesa e estratégica, e entrega o resultado pronto para o usuário.

### Diferencial Chave: O "Prompt Mestre"

Nossa "mágica" vai além do uso de IA. Desenvolvemos um **"Prompt Mestre"** interno, um processo sofisticado que traduz as respostas simples do usuário em prompts complexos e otimizados para as IAs de imagem e texto. Isso garante resultados de alta qualidade, consistência visual e alinhamento estratégico, tornando o gridIA um verdadeiro assistente de marketing virtual.

---

## Tecnologias Utilizadas (Backend)

*   **Linguagem:** Node.js (com JavaScript)
*   **Gerenciador de Pacotes:** npm
*   **Chamadas de API:** Axios
*   **Variáveis de Ambiente:** dotenv
*   **Geração de Imagens AI:** Stability AI (modelo Stable Diffusion) - *Escolha baseada em viabilidade e acesso a créditos gratuitos para desenvolvimento.*
*   **Framework de Testes:** Jest

---

## Como Começar (Configuração e Execução)

Siga os passos abaixo para configurar e rodar o backend do gridIA em seu ambiente local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

*   [Node.js](https://nodejs.org/) (versão LTS recomendada)
*   [npm](https://www.npmjs.com/) (vem com o Node.js)
*   [Git](https://git-scm.com/)

### Instalação

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/renisonramos/gridIA-backend.git
    cd gridIA-backend
    ```
    

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

### Configuração das Variáveis de Ambiente

Para se conectar à API da Stability AI, você precisará de uma chave de API.

1.  **Obtenha sua API Key:**
    *   Crie uma conta no [DreamStudio (Stability AI)](https://dreamstudio.ai/).
    *   Após o login, vá em "API Keys" no seu perfil e gere uma nova chave.

2.  **Crie o arquivo `.env`:**
    *   Na raiz do seu projeto (na mesma pasta onde está `package.json`), crie um novo arquivo chamado `.env` (com o ponto na frente).
    *   Cole sua chave da API da Stability AI neste arquivo no seguinte formato:
        ```
        STABILITY_API_KEY="sk-sua-chave-aqui"
        ```
    *   **ATENÇÃO:** Nunca compartilhe seu arquivo `.env` nem o envie para repositórios públicos! Ele já está configurado no `.gitignore` para ser ignorado pelo Git.

---

## Uso da Aplicação (Etapa Atual de Desenvolvimento)

Nesta fase de iniciação científica, o backend está focado em validar a integração com a IA de geração de imagens.

### Gerando Imagens de Teste

Para ver o módulo de geração de imagens em ação, você pode executar o script de demonstração:

1.  **Certifique-se de que a "trava de segurança" esteja desativada no `index.js`:**
    *   Abra `index.js`.
    *   Certifique-se de que a última linha seja `main();` (sem `//` na frente).

2.  **Execute o script:**
    ```bash
    node index.js
    ```
    *   Este script utiliza dois prompts pré-definidos (que simulam a "engenharia de prompt" do nosso "Prompt Mestre") para gerar duas imagens.
    *   As imagens serão salvas na pasta recém-criada `outputs/` dentro do seu projeto.

### Rodando os Testes de Integração

Para verificar se a integração com a API da Stability AI está funcionando corretamente e se a imagem é salva, você pode executar os testes:

1.  **Certifique-se de que a "trava de segurança" esteja desativada no `image-generator.test.js`:**
    *   Abra `image-generator.test.js`.
    *   Altere a linha do teste de `it.skip(...)` para `it(...)`.

2.  **Execute os testes:**
    ```bash
    npm test
    ```
    *   O Jest executará o teste, que fará uma chamada real à API da Stability AI, gerará uma imagem temporária e a excluirá após a validação.
    *   O resultado no terminal deverá indicar `PASS` (sucesso).

---

## Roadmap e Próximos Passos

Este é um projeto em constante evolução. As próximas etapas incluem:

*   **Desenvolvimento da API Principal:** Integrar o módulo de geração de imagens em um servidor de API completo (usando um framework como NestJS) para comunicação com o frontend.
*   **Lógica do "Prompt Mestre":** Desenvolver a inteligência para traduzir as 3 entradas do usuário em prompts complexos para IAs de texto (para legendas) e imagem.
*   **Orquestração Assíncrona:** Implementar filas de tarefas (BullMQ/Redis) e WebSockets para gerenciar o processamento de geração de imagens de forma eficiente e notificar o usuário em tempo real.
*   **Banco de Dados:** Implementar a persistência dos dados dos grids gerados (PostgreSQL).

---

## Desenvolvedor

*   Renison Borralho Ramos

---