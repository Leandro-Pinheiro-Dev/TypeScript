# Curso TypeScript

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de estudar e aplicar os principais conceitos da linguagem **TypeScript**, explorando desde os tipos básicos até recursos mais avançados, como Classes, Objetos, Interfaces, Generics e Programação Assíncrona.

Durante o desenvolvimento foram criados diversos exemplos práticos para compreender o funcionamento da linguagem e sua conversão para JavaScript, permitindo sua execução no ambiente **Node.js**.

---

# O que é TypeScript?

O **TypeScript** é uma linguagem de programação desenvolvida pela **Microsoft** que estende o JavaScript adicionando **tipagem estática**, recursos de orientação a objetos e ferramentas que facilitam o desenvolvimento de aplicações modernas.

Todo código escrito em TypeScript precisa ser convertido (**transpilado**) para JavaScript antes de ser executado.

Fluxo de funcionamento:

```
TypeScript (.ts)
        │
        ▼
Compilador TypeScript (tsc)
        │
        ▼
JavaScript (.js)
        │
        ▼
Node.js ou Navegador
```

---

# Objetivos do Projeto

- Aprender os conceitos fundamentais do TypeScript.
- Compreender a tipagem estática.
- Desenvolver funções tipadas.
- Trabalhar com objetos e interfaces.
- Implementar classes e herança.
- Utilizar Generics.
- Aplicar Promises e Async/Await.
- Converter código TypeScript para JavaScript.

---

# Estrutura do Projeto

```
Curso-typeScript
│
├── src
│   ├── index.ts
│   ├── objects.ts
│   ├── functions.ts
│   ├── classes.ts
│   └── generics.ts
│
├── dist
│   ├── index.js
│   ├── objects.js
│   ├── functions.js
│   ├── classes.js
│   └── generics.js
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# Conteúdo Desenvolvido

## index.ts

Neste arquivo foram estudados os tipos básicos da linguagem.

Conteúdo:

- Tipos primitivos
- Arrays
- Tuplas
- Enum
- Union Types

Exemplos:

- String
- Number
- Boolean
- Arrays
- Tuplas

---

## objects.ts

Neste módulo foram desenvolvidos exemplos utilizando objetos.

Conteúdo:

- Objetos tipados
- Interfaces
- Métodos
- Enum
- Objetos compostos

---

## functions.ts

Neste arquivo foram desenvolvidos exemplos envolvendo funções.

Conteúdo:

- Funções tradicionais
- Arrow Functions
- Parâmetros opcionais
- Valores padrão
- Callbacks
- Tratamento de erros

---

## classes.ts

Neste módulo foram estudados os principais conceitos da Programação Orientada a Objetos.

Conteúdo:

- Classes
- Objetos
- Construtores
- Encapsulamento
- Herança
- Polimorfismo

---

## generics.ts

Neste arquivo foram implementados conceitos avançados da linguagem.

Conteúdo:

- Generics
- Classes Genéricas
- Arrays Genéricos
- Promises
- Async/Await

---

# Como Executar o Projeto

## 1. Instalar as dependências

Caso ainda não possua o TypeScript instalado:

```bash
npm install -g typescript
```

---

## 2. Verificar a instalação

```bash
tsc -v
```

Exemplo:

```
Version 5.x.x
```

---

## 3. Compilar o projeto

O comando abaixo converte todos os arquivos `.ts` para `.js`.

```bash
tsc
```

Os arquivos JavaScript serão gerados automaticamente na pasta:

```
dist/
```

---

# Executando os Exemplos

## index.js

```bash
node dist/index.js
```

Saída esperada:

```
Idade: 5
Nome: Leandro
Válido: true
...
```

---

## objects.js

```bash
node dist/objects.js
```

Saída esperada:

```
Total dos pedidos: R$ 200
R$ 5000.00
TypeScript
100
true
ADMIN
```

---

## functions.js

```bash
node dist/functions.js
```

Saída esperada:

```
15
5
50
Não é possível dividir por zero
Olá Leandro!
```

---

## classes.js

```bash
node dist/classes.js
```

Saída esperada:

```
Leandro
Leandro Pinheiro
5000
Nome: Carlos
Departamento: TI
Som genérico
Au Au
```

---

## generics.js

```bash
node dist/generics.js
```

Saída esperada:

```
Mensagem: Hello World
Contador: 5
Status: true
Primeira String: Java
Primeiro Número: 10
Soma de números: 30
Concatenação: TypeScript

ID: 1
Produto: Notebook Dell
Preço: R$ 4500

ID: SM001
Produto: Samsung Galaxy
Preço: R$ 2500

Resultado da Promise: 5
```

---

# Comandos Utilizados

Compilar o projeto:

```bash
tsc
```

Executar o arquivo principal:

```bash
node dist/index.js
```

Executar objetos:

```bash
node dist/objects.js
```

Executar funções:

```bash
node dist/functions.js
```

Executar classes:

```bash
node dist/classes.js
```

Executar generics:

```bash
node dist/generics.js
```

---

# Vantagens do TypeScript

- Tipagem estática.
- Identificação de erros durante o desenvolvimento.
- Melhor organização do código.
- Melhor suporte da IDE.
- Facilidade de manutenção.
- Maior produtividade.
- Excelente integração com JavaScript.
- Muito utilizado em projetos profissionais.

---

# Tecnologias Utilizadas

- TypeScript
- JavaScript
- Node.js
- Visual Studio Code

---

# Conceitos Estudados

- Tipos Primitivos
- Arrays
- Tuplas
- Interfaces
- Objetos
- Funções
- Arrow Functions
- Classes
- Encapsulamento
- Herança
- Polimorfismo
- Generics
- Promises
- Async/Await

---

# Conclusão

Este projeto permitiu aplicar os principais recursos do TypeScript por meio de exemplos práticos, desde conceitos básicos até funcionalidades mais avançadas. Também foi possível compreender o processo de transpilação do TypeScript para JavaScript utilizando o compilador `tsc` e executar os arquivos gerados com o Node.js. A experiência proporcionou uma base sólida para o desenvolvimento de aplicações modernas e escaláveis, aproveitando os benefícios da tipagem estática e da melhor organização do código oferecidos pelo TypeScript.
