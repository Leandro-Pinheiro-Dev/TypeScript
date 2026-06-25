// ======================================================
// CLASSES, ENCAPSULAMENTO E MODIFICADORES DE ACESSO
// ======================================================

/*
 * Em TypeScript podemos controlar quem pode acessar
 * os atributos e métodos de uma classe através dos
 * modificadores de acesso.
 *
 * Existem 3 principais:
 *
 * public    -> acesso livre em qualquer lugar
 * protected -> acesso apenas na classe e nas filhas
 * private   -> acesso somente dentro da própria classe
 */

// ======================================================
// INTERFACE
// ======================================================

/*
 * Interfaces funcionam como contratos.
 *
 * Toda classe que implementar esta interface
 * será obrigada a possuir:
 *
 * - firstName
 * - getFullName()
 */

interface Person {
  firstName: string;

  getFullName(): string;
}

// ======================================================
// CLASSE BASE
// ======================================================

class Employee implements Person {
  constructor(
    /*
     * PUBLIC
     *
     * Pode ser acessado em qualquer lugar.
     */

    public firstName: string,

    /*
     * PROTECTED
     *
     * Pode ser acessado:
     * ✔ Dentro da classe
     * ✔ Nas classes filhas
     *
     * Não pode ser acessado fora da classe.
     */

    protected lastName: string,

    /*
     * PRIVATE
     *
     * Pode ser acessado apenas dentro da própria classe.
     *
     * Nem mesmo uma classe filha consegue acessar.
     */

    private salary: number,
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getSalary(): number {
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
  private department: string;

  constructor(
    firstName: string,
    lastName: string,
    salary: number,
    department: string,
  ) {
    super(firstName, lastName, salary);

    this.department = department;
  }

  showManagerData(): void {
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
  constructor(private balance: number) {}

  /*
   * Método privado.
   *
   * Só pode ser chamado pela própria classe.
   */

  private validateValue(value: number): boolean {
    return value > 0;
  }

  deposit(value: number): void {
    if (this.validateValue(value)) {
      this.balance += value;
    }
  }

  getBalance(): number {
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
  protected makeSound(): void {
    console.log("Som genérico");
  }
}

class Dog extends Animal {
  bark(): void {
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
