"use strict";
/*****************************************************************
 * TYPESCRIPT - INTERFACES PARA FUNCTIONS
 *
 * Em TypeScript, uma interface pode ser utilizada para definir
 * a estrutura de uma função, especificando:
 *
 * - Quantidade de parâmetros
 * - Tipo dos parâmetros
 * - Tipo do retorno
 *
 * Isso garante que qualquer função que implemente a interface
 * siga exatamente o mesmo contrato.
 *****************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// ======================================================
// IMPLEMENTANDO A INTERFACE
// ======================================================
/*
 * A função sum segue exatamente a assinatura
 * definida pela interface MathFunc.
 */
const sum = (x, y) => {
    return x + y;
};
console.log(sum(10, 5));
// ======================================================
// SUBTRAÇÃO
// ======================================================
const sub = (x, y) => {
    return x - y;
};
console.log(sub(10, 5));
// ======================================================
// MULTIPLICAÇÃO
// ======================================================
const multiply = (x, y) => {
    return x * y;
};
console.log(multiply(10, 5));
// ======================================================
// DIVISÃO
// ======================================================
const divide = (x, y) => {
    if (y === 0) {
        return "Não é possível dividir por zero";
    }
    return x / y;
};
console.log(divide(10, 2));
console.log(divide(10, 0));
// ======================================================
// ARMAZENANDO RESULTADOS
// ======================================================
const value = sum(2, 3);
console.log(`Resultado da soma: ${value}`);
// ======================================================
// FUNÇÕES COM VOID
// ======================================================
/*
 * void significa que a função não retorna valor.
 * Ela apenas executa alguma ação.
 */
const log = (message) => {
    console.log(`[LOG]: ${message}`);
};
log("Sistema iniciado.");
const calculator = (firstValue, secondValue, operation) => {
    switch (operation) {
        case "+":
            return `${firstValue + secondValue}`;
        case "-":
            return `${firstValue - secondValue}`;
        case "*":
            return `${firstValue * secondValue}`;
        case "/":
            return `${firstValue / secondValue}`;
        default:
            return "Operação inválida";
    }
};
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));
const welcome = (name, age) => {
    if (age) {
        return `Olá ${name}, você possui ${age} anos.`;
    }
    return `Olá ${name}!`;
};
console.log(welcome("Leandro"));
console.log(welcome("Leandro", 30));
// ======================================================
// VALORES PADRÃO
// ======================================================
const calculateDiscount = (price, discount = 10) => {
    return price - (price * discount / 100);
};
console.log(calculateDiscount(100));
console.log(calculateDiscount(100, 20));
// ======================================================
// CALLBACK FUNCTIONS
// ======================================================
/*
 * Callback é uma função passada como parâmetro
 * para outra função.
 */
function executeOperation(x, y, operation) {
    return operation(x, y);
}
console.log(executeOperation(10, 5, sum));
console.log(executeOperation(10, 5, multiply));
const power = (x, y) => {
    return Math.pow(x, y);
};
console.log(power(2, 3));
// ======================================================
// RESUMO
// ======================================================
/*
 * Interface para Functions:
 *
 * interface MathFunc {
 *   (x: number, y: number): number;
 * }
 *
 * Vantagens:
 *
 * ✔ Padroniza funções
 * ✔ Facilita manutenção
 * ✔ Evita erros de tipagem
 * ✔ Muito usada em callbacks
 * ✔ Muito usada em APIs
 * ✔ Muito usada em React e Angular
 *
 * Conceitos vistos:
 *
 * - Interface para funções
 * - Retorno number
 * - Retorno string
 * - void
 * - Parâmetros opcionais
 * - Valores padrão
 * - Callbacks
 * - Type Alias para funções
 */ 
//# sourceMappingURL=functions.js.map