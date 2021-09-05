/*
https://docs.microsoft.com/pt-br/learn/modules/create-nodejs-project-dependencies/2-package-json


npm init - Esse comando inicia um assistente que 
solicitará informações sobre o nome, a versão, a descrição,
o ponto de entrada, o comando de teste, o repositório Git,
as palavras-chave, o autor e a licença do projeto.

npm init -y   - Esse comando, com o sinalizador -y, é uma versão
mais rápida de npm init. Ele é mais rápido no sentido de que não
é interativo. Em vez disso, ele atribui valores padrão a todos os
valores que você precisaria fornecer se executasse npm init.



JSON - package.json representation example

{
  // Metainformação
  "name": "my project",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",

  // Dependências
  "dependencies": {},
  "devDependencies": {},

  // Scripts para iniciar, criar, testar e efectuar lint (sinalizar erros, 
  bugs, erros estílisticos e construções suspeitas)
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

npm run <script name> - correr o devido script do ficheiro package.json
(no caso de test e start é possível omitir o run)

npm view <nome da biblioteca> - mostra informação sobre a biblioteca 

npm install <package name> - instalar biblioteca (vai ao registro global 
- npm - e procura o código e coloca na pasta node_modules)

//Os pacotes podem estar em registros, repositórios, arquivos e directórios

npm --help - lista de comandos npm

npm install <dependency name> - instalar dependência normal (destinada
a ser usada como parte da aplicação)

ou

npm install <package> --production (instala dependência só em dependencies, 
não instalando desta forma em devDependencies)

//Para instalar dependência de desenvolvedor deve-se

npm install <dependency name> --save-dev

npm install <dependency name> -g  (instala um pacote globalmente,
desta forma é instalado numa diretoria específica do computador, e 
fica disponível para todos os projetos do Node.js)


A ferramenta npx permite que você carregue a dependência no processo 
do Node.js e execute o comando nele. Após a execução do comando, 
a dependência é limpa e removida do sistema. A ferramenta npx foi 
fornecida com todas as versões principais do npm desde a versão 5.2. 
Essa ferramenta é a maneira preferencial de usar dependências que serão
executadas com pouca frequência. Para usar a ferramenta npx, digite. 
 
 npx <name of package>

Isso vai buscar a dependência, executará o comando e fará a limpeza.

npm list - ver todos os pacotes na pasta node_modules

npm list --depth=<depth> 
(filtrar os pacotes por nível)
  - nível 0 pacote
  - nível 1 dependências desse pacote

e por aí adiante

npm uninstall <name of dependency> - desinstalar pacote

npm prune - remove todas as dependências na pasta node_modules que não estão
listadas como dependências no arquivo de manifesto (package.json)

npm update - atualiza todos os pacotes (em desenvolvimento é muito perigoso executar este comando)

npm update <name of package>@<optional argument with version number>

npm install <name of package>@latest - forçar a instalação da última versão, mesmo que o package-lock não 
permita por exemplo

//se inserir como segundo parâmetro "<name of dependency>": "1.1.x", vai buscar apenas patches por exemplo
//se meter x na 2ª posição (versão secundária), e na 1ª posição (versão principal)

npm outdated - procurar por pacotes desatualizados

npm audit - verificar se existe vulnerabilidades na aplicação

npm audit fix - tenta atualizar para uma versão secundária na qual o problema não exista

npm audit fix --force tenta atualizar a versão principal de forma a corrigir o erro.

https://docs.microsoft.com/pt-br/learn/modules/debug-nodejs/3-run-your-code-step-by-step

//DEBUGGER browser - externo

debugger; - antes da linha de código a verificar

node --inspect  - por default o ip é 127.0.0.1 e a porta 9229

node --inspect=<HOST>:<PORT>

node --inspect-brk - interrompe antes do ínicio do código

//DEBUGGER interno

node inspect <YOUR_SCRIPT>.js

*/