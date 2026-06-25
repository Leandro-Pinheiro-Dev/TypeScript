"use strict";
// ======================================================
// CLASSES, ENCAPSULAMENTO E MODIFICADORES DE ACESSO
// ======================================================
Object.defineProperty(exports, "__esModule", { value: true });
// ======================================================
// CLASSE BASE
// ======================================================
class Employee {
    firstName;
    lastName;
    salary;
    constructor(
    /*
     * PUBLIC
     *
     * Pode ser acessado em qualquer lugar.
     */
    firstName, 
    /*
     * PROTECTED
     *
     * Pode ser acessado:
     * ✔ Dentro da classe
     * ✔ Nas classes filhas
     *
     * Não pode ser acessado fora da classe.
     */
    lastName, 
    /*
     * PRIVATE
     *
     * Pode ser acessado apenas dentro da própria classe.
     *
     * Nem mesmo uma classe filha consegue acessar.
     */
    salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getSalary() {
        return this.salary;
    }
}
// ======================================================
// INSTANCIANDO OBJETO
// ======================================================
const employee = new Employee("Leandro", "Pinheiro", 5000);
console.log(employee.firstName); // OK
console.log(employee.getFullName());
console.log(employee.getSalary());
// ======================================================
// ERROS DE ACESSO
// ======================================================
/*
 * Os exemplos abaixo geram erro.
 */
// console.log(employee.lastName);
// ERRO: propriedade protected
// console.log(employee.salary);
// ERRO: propriedade private
// ======================================================
// HERANÇA
// ======================================================
/*
 * Uma classe filha herda tudo da classe pai.
 */
class Manager extends Employee {
    department;
    constructor(firstName, lastName, salary, department) {
        super(firstName, lastName, salary);
        this.department = department;
    }
    showManagerData() {
        console.log("Nome:", this.firstName);
        /*
         * protected funciona aqui porque
         * a classe Manager herdou Employee.
         */
        console.log("Sobrenome:", this.lastName);
        /*
         * private NÃO funciona.
         */
        // console.log(this.salary);
        // ERRO
        console.log("Departamento:", this.department);
    }
}
const manager = new Manager("Carlos", "Silva", 12000, "TI");
manager.showManagerData();
// ======================================================
// PRIVATE EM MÉTODOS
// ======================================================
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    /*
     * Método privado.
     *
     * Só pode ser chamado pela própria classe.
     */
    validateValue(value) {
        return value > 0;
    }
    deposit(value) {
        if (this.validateValue(value)) {
            this.balance += value;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
// account.validateValue(10);
// ERRO: método privado
// ======================================================
// PROTECTED EM MÉTODOS
// ======================================================
class Animal {
    makeSound() {
        console.log("Som genérico");
    }
}
class Dog extends Animal {
    bark() {
        /*
         * Método protected pode ser utilizado
         * pela classe filha.
         */
        this.makeSound();
        console.log("Au Au");
    }
}
const dog = new Dog();
dog.bark();
// dog.makeSound();
// ERRO
// ======================================================
// RESUMO
// ======================================================
/*
 * PUBLIC
 *
 * ✔ Classe
 * ✔ Classe filha
 * ✔ Objeto externo
 *
 * Exemplo:
 * public firstName
 *
 * ------------------------------------
 *
 * PROTECTED
 *
 * ✔ Classe
 * ✔ Classe filha
 * ✖ Objeto externo
 *
 * Exemplo:
 * protected lastName
 *
 * ------------------------------------
 *
 * PRIVATE
 *
 * ✔ Classe
 * ✖ Classe filha
 * ✖ Objeto externo
 *
 * Exemplo:
 * private salary
 *
 * ------------------------------------
 *
 * Tabela:
 *
 *                    Classe | Filha | Externo
 * public               ✔       ✔       ✔
 * protected            ✔       ✔       ✖
 * private              ✔       ✖       ✖
 */
//# sourceMappingURL=classes.js.map