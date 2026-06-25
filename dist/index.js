"use strict";
/*
====================================================
TIPOS BÁSICOS EM TYPESCRIPT
====================================================
O TypeScript adiciona tipagem ao JavaScript,
permitindo identificar erros durante o desenvolvimento.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// number -> números inteiros e decimais
let age = 5;
// string -> textos
const name = "Leandro";
// boolean -> verdadeiro ou falso
const isValid = true;
// any -> aceita qualquer tipo de dado
// Deve ser evitado quando possível
let idk = 5;
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
const ids = [1, 2, 3, 4, 5];
// Array de booleanos
const booleans = [true, false, true, false];
// Array de strings
const names = ["Leandro", "Santos"];
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
const person = [1, "Leandro"];
console.log(person);
/*
====================================================
ARRAY DE TUPLAS
====================================================
Muito utilizado para listas de registros.
*/
const people = [
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
const productId = false;
console.log(productId);
/*
====================================================
ENUM
====================================================
Enums permitem criar conjuntos de constantes nomeadas.

São úteis para representar estados,
direções, níveis de acesso, etc.
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
    Direction["Right"] = "Direita";
})(Direction || (Direction = {}));
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
const productName = "Boné";
// Forma usando <>
let itemId1 = productName;
// Forma usando as
let itemId2 = productName;
console.log(itemId1);
console.log(itemId2);
//# sourceMappingURL=index.js.map