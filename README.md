# Portfólio02

Este repositório contém o código-fonte do meu portfólio pessoal de sites, desenvolvido para demonstrar minhas habilidades em desenvolvimento web. Aqui, você encontrará uma coleção de projetos que criei, com ênfase em design responsivo, performance e melhores práticas de desenvolvimento.

## 🖥️ Sobre

Este site é um portfólio interativo que inclui:

- **Home page** com uma visão geral do site.
- **Página de projetos** com um grid que recebe as informações e imagens de uma API rest.
- **Seção de contato** para permitir a comunicação direta com possíveis clientes também conectada a uma API rest tipo POST.
- **Design responsivo**, garantindo boa experiência em diferentes dispositivos (desktop, celular).

### Tecnologias utilizadas:
- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- REACTjs
- JavaScript
- Fontes personalizadas (Google Fonts)
- Imagens otimizadas

## 🚀 Como executar o projeto

1. Clone o repositório para o seu computador:
    ```bash
    git clone https://github.com/guilerm3/dnc-arq-guilherme.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd dnc-arq-guilherme
    ```

3. O projeto é estático, ou seja, você pode simplesmente abrir o arquivo `index.html` diretamente em seu navegador:
    ```bash
    open index.html  # no macOS
    start index.html # no Windows
    xdg-open index.html # no Linux
    ```

Se você deseja executar em um servidor local, pode usar uma ferramenta como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (para Visual Studio Code) ou configurar um servidor de sua preferência.

## 📂 Estrutura de Diretórios

```bash
├── public/
│   └── assets/              # Imagens e outros assets estáticos
├── src/
│   ├── assets/              # Imagens e arquivos estáticos utilizados no React
│   ├── components/          # Componentes React reutilizáveis (ex: Header, Footer, Card)
│   │   ├── Header.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Footer.jsx
│   ├── pages/               # Páginas ou "views" do seu portfólio
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Componente principal que renderiza as páginas e componentes
│   ├── main.jsx             # Ponto de entrada (onde o React DOM é renderizado)
│   ├── main.css/            # Arquivos de estilo (CSS, SASS ou Styled Components)
│   └── utils/               # Funções utilitárias e hooks personalizados
│       └── ScrollTop.jsx
├── index.html               # Arquivo HTML principal (template para o React renderizar)
├── .gitignore               # Arquivos que devem ser ignorados pelo Git
├── package.json             # Dependências e scripts do projeto
├── README.md                # Este arquivo

