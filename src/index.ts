/*
====================================================
TIPOS BÁSICOS EM TYPESCRIPT
====================================================
O TypeScript adiciona tipagem ao JavaScript,
permitindo identificar erros durante o desenvolvimento.
*/

// number -> números inteiros e decimais
let age: number = 5;

// string -> textos
const name: string = "Leandro";

// boolean -> verdadeiro ou falso
const isValid: boolean = true;

// any -> aceita qualquer tipo de dado
// Deve ser evitado quando possível
let idk: any = 5;

idk = "12";
idk = true;

console.log("Idade:", age);
console.log("Nome:", name);
console.log("Válido:", isValid);
console.log("Valor de idk:", idk);

/*
====================================================
ARRAYS (VETORES)
====================================================
Um array é uma coleção de elementos do mesmo tipo.
*/

// Array de números
const ids: number[] = [1, 2, 3, 4, 5];

// Array de booleanos
const booleans: boolean[] = [true, false, true, false];

// Array de strings
const names: string[] = ["Leandro", "Santos"];

console.log(ids);
console.log(booleans);
console.log(names);

/*
====================================================
TUPLAS (TUPLES)
====================================================
Permitem armazenar múltiplos valores de tipos
diferentes em uma ordem específica.

Formato:
[tipo1, tipo2, tipo3]
*/

const person: [number, string] = [1, "Leandro"];

console.log(person);

/*
====================================================
ARRAY DE TUPLAS
====================================================
Muito utilizado para listas de registros.
*/

const people: [number, string][] = [
  [1, "Jane"],
  [2, "Done"],
  [3, "Loren"],
];

console.log(people);

/*
====================================================
UNION TYPES
====================================================
Permitem que uma variável aceite mais de um tipo.

Símbolo utilizado: |
(leia-se "ou")
*/

const productId: string | number | boolean = false;

console.log(productId);

/*
====================================================
ENUM
====================================================
Enums permitem criar conjuntos de constantes nomeadas.

São úteis para representar estados,
direções, níveis de acesso, etc.
*/

enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
  Right = "Direita",
}

const direction = Direction.Up;

console.log(direction);

/*
====================================================
TYPE ASSERTION
====================================================
Permite informar ao TypeScript qual é o tipo
de uma variável quando ele não consegue inferir.

Sintaxe 1:
<tipo>variavel

Sintaxe 2 (mais utilizada):
variavel as tipo
*/

const productName: any = "Boné";

// Forma usando <>
let itemId1 = <string>productName;

// Forma usando as
let itemId2 = productName as string;

console.log(itemId1);
console.log(itemId2);

/*
====================================================
RESUMO DOS PRINCIPAIS TIPOS
====================================================

number   -> 10, 20, 3.14
string   -> "Leandro"
boolean  -> true ou false
any      -> qualquer tipo
array    -> listas de valores
tuple    -> valores de tipos diferentes em ordem fixa
union    -> mais de um tipo permitido
enum     -> conjunto de constantes nomeadas

====================================================
*/

export {};

/*O que é o comando tsc?

O comando tsc significa TypeScript Compiler (Compilador TypeScript).

Ele é responsável por transformar arquivos .ts (TypeScript) em arquivos .js (JavaScript), 
pois os navegadores e o Node.js executam JavaScript, não TypeScript. 
*/
