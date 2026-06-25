"use strict";
/**
 * =====================================================
 * GENERICS EM TYPESCRIPT
 * =====================================================
 * Generics permitem criar funções, classes e interfaces
 * reutilizáveis, mantendo a segurança de tipos.
 *
 * Em vez de trabalhar com um tipo específico (string,
 * number, etc.), utilizamos um parâmetro genérico que
 * será definido no momento da utilização.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Função genérica que retorna exatamente o valor recebido.
 *
 * @param value Valor de qualquer tipo.
 * @returns O mesmo valor informado.
 */
function returnValue(value) {
    return value;
}
// Exemplos de utilização
const message = returnValue("Hello World");
const count = returnValue(5);
const isActive = returnValue(true);
console.log("Mensagem:", message);
console.log("Contador:", count);
console.log("Status:", isActive);
/**
 * =====================================================
 * GENERICS COM ARRAYS
 * =====================================================
 */
/**
 * Retorna o primeiro elemento de um array.
 *
 * @param array Vetor de qualquer tipo.
 * @returns Primeiro elemento do array.
 */
function getFirstValueFromArray(array) {
    return array[0]; //O ! significa:"Confie em mim, isso nunca será undefined."
}
// Aplicações práticas
const firstString = getFirstValueFromArray([
    "Java",
    "Python",
    "TypeScript",
]);
const firstNumber = getFirstValueFromArray([10, 20, 30]);
console.log("Primeira String:", firstString);
console.log("Primeiro Número:", firstNumber);
/**
 * =====================================================
 * PROMISES E ASYNC/AWAIT
 * =====================================================
 * Promises representam operações assíncronas.
 * Muito utilizadas para chamadas de APIs,
 * consultas a banco de dados e leitura de arquivos.
 */
/**
 * Simula uma consulta que retorna uma string.
 */
async function returnPromise() {
    return "5";
}
/**
 * Função responsável por consumir a Promise.
 */
async function executePromise() {
    const result = await returnPromise();
    console.log("Resultado da Promise:", result);
}
executePromise();
/**
 * =====================================================
 * CLASSES GENÉRICAS
 * =====================================================
 * Classes genéricas permitem criar estruturas
 * reutilizáveis para diferentes tipos de dados.
 */
class GenericNumber {
    /**
     * Valor inicial da classe.
     */
    zeroValue;
    /**
     * Função utilizada para somar dois valores.
     */
    sum;
    constructor(zeroValue, sum) {
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}
/**
 * Aplicação com números
 */
const numberOperations = new GenericNumber(0, (x, y) => x + y);
console.log("Soma de números:", numberOperations.sum(10, 20));
/**
 * Aplicação com strings
 */
const stringOperations = new GenericNumber("", (x, y) => x + y);
console.log("Concatenação:", stringOperations.sum("Type", "Script"));
/**
 * =====================================================
 * EXEMPLO REAL DE APLICAÇÃO
 * =====================================================
 * Sistema simples de produtos utilizando Generics.
 */
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    displayInfo() {
        console.log(`
        ID: ${this.id}
        Produto: ${this.name}
        Preço: R$ ${this.price}
        `);
    }
}
// Produto com ID numérico
const notebook = new Product(1, "Notebook Dell", 4500);
// Produto com ID string
const smartphone = new Product("SM001", "Samsung Galaxy", 2500);
notebook.displayInfo();
smartphone.displayInfo();
//# sourceMappingURL=generics.js.map