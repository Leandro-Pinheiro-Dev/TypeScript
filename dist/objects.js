"use strict";
/*****************************************************************
 * TYPESCRIPT - TIPOS, INTERFACES E FUNCTIONS
 *
 * TypeScript é um superset do JavaScript que adiciona tipagem
 * estática, tornando o código mais seguro e fácil de manter.
 *****************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// ======================================================
// CRIANDO OBJETOS COM TYPE
// ======================================================
const user = {
    firstName: "Leandro",
    age: 30,
    email: "l10@gmail.com",
    orders: [
        {
            productId: "1",
            price: 200,
        },
    ],
};
// ======================================================
// FUNCTIONS
// ======================================================
/*
 * Função simples recebendo uma string.
 * O retorno "void" significa que ela não retorna valor.
 */
function printLog(message) {
    console.log(`[LOG]: ${message}`);
}
/*
 * O operador "!" informa ao TypeScript que temos certeza
 * de que o valor não será undefined.
 *
 * ATENÇÃO:
 * Use apenas quando realmente tiver certeza.
 */
printLog(user.password);
/*
 * Função com retorno tipado.
 */
function getUserName(user) {
    return user.firstName;
}
console.log(getUserName(user));
/*
 * Função que calcula o valor total dos pedidos.
 */
function calculateTotalOrders(orders) {
    return orders.reduce((total, order) => total + order.price, 0);
}
console.log(`Total dos pedidos: R$ ${calculateTotalOrders(user.orders)}`);
/*
 * O operador "&" (Intersection)
 * obriga o objeto a possuir TODAS as propriedades
 * dos dois tipos.
 */
const author = {
    firstName: "Leandro",
    age: 30,
    email: "author@gmail.com",
    books: ["Java", "TypeScript"],
    orders: [],
};
/*
 * Uma vez criado, o firstName não poderá ser alterado.
 */
const emailUser = {
    firstName: "Leandro",
    email: "l10@gmail.com",
};
const admin = {
    firstName: "Administrador",
    email: "admin@gmail.com",
    permissions: ["CREATE", "UPDATE", "DELETE"],
};
// ======================================================
// INTERSECTION COM INTERFACES
// ======================================================
const newAuthor = {
    firstName: "Leandro",
    email: "author@gmail.com",
    books: ["Node.js", "Spring Boot"],
};
const notebook = {
    id: "1",
    name: "Notebook Gamer",
    price: 5000,
    getFormattedPrice() {
        return `R$ ${this.price.toFixed(2)}`;
    },
};
console.log(notebook.getFormattedPrice());
const customer = {
    name: "Carlos",
    email: "carlos@gmail.com",
};
// ======================================================
// GENERICS
// ======================================================
/*
 * Generics permitem criar código reutilizável.
 */
function returnValue(value) {
    return value;
}
console.log(returnValue("TypeScript"));
console.log(returnValue(100));
console.log(returnValue(true));
// ======================================================
// ENUMS
// ======================================================
/*
 * Enum representa um conjunto de valores constantes.
 */
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
    UserRole["GUEST"] = "GUEST";
})(UserRole || (UserRole = {}));
const role = UserRole.ADMIN;
console.log(role);
// ======================================================
// RESUMO
// ======================================================
/*
 * TYPE
 * - Ideal para criar tipos personalizados.
 * - Permite Union (|) e Intersection (&).
 *
 * INTERFACE
 * - Ideal para contratos e orientação a objetos.
 * - Pode usar extends.
 * - Muito utilizada em APIs e projetos grandes.
 *
 * FUNCTIONS
 * - Podem receber parâmetros tipados.
 * - Podem definir o tipo de retorno.
 *
 * GENERICS
 * - Permitem reutilização de código mantendo a tipagem.
 *
 * ENUMS
 * - Representam valores constantes.
 */
//# sourceMappingURL=objects.js.map