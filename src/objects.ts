/*****************************************************************
 * TYPESCRIPT - TIPOS, INTERFACES E FUNCTIONS
 *
 * TypeScript é um superset do JavaScript que adiciona tipagem
 * estática, tornando o código mais seguro e fácil de manter.
 *****************************************************************/

// ======================================================
// TYPE ALIAS
// ======================================================

/*
 * Type Alias permite criar um "apelido" para um tipo.
 * É muito utilizado para representar objetos complexos.
 */

type Order = {
  productId: string;
  price: number;
};

/*
 * O símbolo "?" torna a propriedade opcional.
 * Neste caso, o usuário pode ou não possuir senha.
 */
type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

// ======================================================
// CRIANDO OBJETOS COM TYPE
// ======================================================

const user: User = {
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
function printLog(message: string): void {
  console.log(`[LOG]: ${message}`);
}

/*
 * O operador "!" informa ao TypeScript que temos certeza
 * de que o valor não será undefined.
 *
 * ATENÇÃO:
 * Use apenas quando realmente tiver certeza.
 */
printLog(user.password!);

/*
 * Função com retorno tipado.
 */
function getUserName(user: User): string {
  return user.firstName;
}

console.log(getUserName(user));

/*
 * Função que calcula o valor total dos pedidos.
 */
function calculateTotalOrders(orders: Order[]): number {
  return orders.reduce((total, order) => total + order.price, 0);
}

console.log(`Total dos pedidos: R$ ${calculateTotalOrders(user.orders)}`);

// ======================================================
// UNION TYPES
// ======================================================

/*
 * Union Types permitem combinar tipos.
 */

type Author = {
  books: string[];
};

/*
 * O operador "&" (Intersection)
 * obriga o objeto a possuir TODAS as propriedades
 * dos dois tipos.
 */

const author: Author & User = {
  firstName: "Leandro",
  age: 30,
  email: "author@gmail.com",
  books: ["Java", "TypeScript"],
  orders: [],
};

// ======================================================
// INTERFACES
// ======================================================

/*
 * Interfaces são muito utilizadas para definir contratos.
 * Diferentemente dos types, elas podem ser estendidas
 * facilmente através do "extends".
 */

interface UserInterface {
  readonly firstName: string; // Somente leitura
  email: string;
}

/*
 * Uma vez criado, o firstName não poderá ser alterado.
 */

const emailUser: UserInterface = {
  firstName: "Leandro",
  email: "l10@gmail.com",
};

// ======================================================
// HERANÇA COM INTERFACES
// ======================================================

interface AuthorInterface {
  books: string[];
}

/*
 * extends = herança
 * A interface Admin herda UserInterface
 */

interface Admin extends UserInterface {
  permissions: string[];
}

const admin: Admin = {
  firstName: "Administrador",
  email: "admin@gmail.com",
  permissions: ["CREATE", "UPDATE", "DELETE"],
};

// ======================================================
// INTERSECTION COM INTERFACES
// ======================================================

const newAuthor: UserInterface & AuthorInterface = {
  firstName: "Leandro",
  email: "author@gmail.com",
  books: ["Node.js", "Spring Boot"],
};

// ======================================================
// MÉTODOS EM INTERFACES
// ======================================================

/*
 * Interfaces também podem definir métodos.
 */

interface Product {
  id: string;
  name: string;
  price: number;

  getFormattedPrice(): string;
}

const notebook: Product = {
  id: "1",
  name: "Notebook Gamer",
  price: 5000,

  getFormattedPrice() {
    return `R$ ${this.price.toFixed(2)}`;
  },
};

console.log(notebook.getFormattedPrice());

// ======================================================
// INTERFACE COM MÉTODO OPCIONAL
// ======================================================

interface Customer {
  name: string;
  email: string;

  sendEmail?(): void;
}

const customer: Customer = {
  name: "Carlos",
  email: "carlos@gmail.com",
};

// ======================================================
// GENERICS
// ======================================================

/*
 * Generics permitem criar código reutilizável.
 */

function returnValue<T>(value: T): T {
  return value;
}

console.log(returnValue<string>("TypeScript"));
console.log(returnValue<number>(100));
console.log(returnValue<boolean>(true));

// ======================================================
// ENUMS
// ======================================================

/*
 * Enum representa um conjunto de valores constantes.
 */

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

const role: UserRole = UserRole.ADMIN;

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
