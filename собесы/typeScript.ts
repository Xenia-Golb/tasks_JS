interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}
function printUser(obj: User) {
  return `id: ${obj.id}, name: ${obj.name}, email: ${obj.email}`;
}
// console.log(
//   printUser({
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//   })
// );
//Типизация функций
//Напишите функцию sum, которая принимает два числа и возвращает их сумму.
//Убедитесь, что аргументы и возвращаемое значение типизированы.

function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(2, 3));

// Массивы и кортежи
// Создайте массив чисел и типизируйте его.
// Создайте кортеж (tuple), который содержит строку, число и булево значение.
let arr: number[];
let tuple: [string, number, boolean];

//Union Types
//Напишите функцию printId, которая принимает аргумент типа string | number и выводит его в консоль.

function printId(arg: string | boolean) {
  return arg;
}
console.log(printId("str"));
console.log(printId(true));

// Literal Types
// Создайте тип Direction, который может быть только "left", "right", "up" или "down".
// Напишите функцию move, которая принимает аргумент типа Direction и выводит, в какую сторону происходит движение.

type Direction = "up" | "left" | "right" | "down";
function move(arg: Direction) {
  return `движемся ${arg}`;
}
console.log(move("up"));

//Задачи среднего уровня
// Generics
// Напишите generic-функцию identity, которая принимает аргумент любого типа и возвращает его.
// Создайте generic-интерфейс Box, который содержит поле value с типом, переданным в generic.

function identity<T>(arg: T): T {
  return arg;
}
interface Box<T> {
  value: T;
}
function createBox<T>(value: T): Box<T> {
  return { value };
}
// Напишите функцию getValue, которая извлекает значение из объекта типа Box<T>.
function getValue<T>(arg: Box<T>): T {
  return arg.value;
}
console.log(
  getValue({
    value: 32,
  })
);
// Создайте generic-класс AdvancedBox, который содержит методы для установки и получения значения.
class AdvancedBox<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
  setValue(newValue: T): void {
    this.value = newValue;
  }
}

//Создайте функцию mergeBoxes, которая объединяет два объекта типа Box<T> в один новый объект типа Box<T[]>.

function mergeBoxes<T>(box1: Box<T>, box2: Box<T>): Box<T[]> {
  return { value: [box1.value, box2.value] };
}
const box1: Box<number> = { value: 11 };
const box2: Box<number> = { value: 22 };

const mergedBox = mergeBoxes(box1, box2);
console.log(mergedBox.value);

//Создайте generic-функцию filterBoxes, которая фильтрует массив объектов типа Box<T> по заданному условию.
function filterBoxes<T>(
  boxes: Box<T>[],
  predicate: (value: T) => boolean
): Box<T>[] {
  return boxes.filter((box) => predicate(box.value));
}

// Классы
// Создайте класс Animal с полями name (строка) и age (число). Добавьте метод makeSound, который выводит звук животного.
// Создайте класс Dog, который наследует Animal, и переопределите метод makeSound.
class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  makeSound(): string {
    return "fvhbv";
  }
}
class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }
  makeSound(): string {
    return "woof";
  }
}
const myDog = new Dog("rick", 5);
console.log(myDog.makeSound());

//Декораторы
//Напишите декоратор log, который выводит в консоль имя функции и её аргументы перед её выполнением

function log(
  target: any,
  propertyKey: string,
  descriptor?: PropertyDescriptor
) {
  if (descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Вызывается метод "${propertyKey}" с аргументами:`, args);
      const result = originalMethod.apply(this, args);
      return result;
    };
  }
  return function (targetFunction: Function) {
    return function (this: any, ...args: any[]) {
      console.log(`Вызывается функция: ${targetFunction.name}`);
      console.log(`Аргументы:`, args);
      return targetFunction.apply(this, args);
    };
  };
}

// const add = log(function(a: number, b: number): number {
//     return a + b;
// })

// Типизация объектов
// Создайте интерфейс Product с полями id (число), name (строка), price (число) и category (строка).
// Напишите функцию filterProducts, которая принимает массив продуктов и категорию, а возвращает массив продуктов, отфильтрованных по категории.

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}
function filterProducts(products: Product[], category: string): Product[] {
  return products.filter((product) => product.category === category);
}
// Массив продуктов
const products: Product[] = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Headphones", price: 50, category: "Electronics" },
  { id: 3, name: "T-shirt", price: 20, category: "Clothing" },
  { id: 4, name: "Jeans", price: 40, category: "Clothing" },
  { id: 5, name: "Blender", price: 80, category: "Home Appliances" },
];

// Фильтрация продуктов по категории "Electronics"
const electronics = filterProducts(products, "Electronics");
console.log(electronics);

//Опциональные и readonly свойства
// Создайте интерфейс Config с полями id (число), name (строка) и опциональным полем description (строка).
// Сделайте поле id доступным только для чтения (readonly).
interface Config {
  readonly id: number;
  name: string;
  description?: string;
}

//Условные типы
//Напишите тип NonNullable<T>, который удаляет null и undefined из типа T.
type NonNullables<T> = T extends null | undefined ? never : T;

// Задача: Создайте тип If<T, U, V>, который работает как условный оператор.
// Если T равен true, то результатом будет тип U.
// Если T равен false, то результатом будет тип V.
type If<T, U, V> = T extends true | false ? U : V;
type Result2 = If<false, string, number>;

//Mapped Types
//Создайте тип ReadonlyProduct, который делает все поля интерфейса Product доступными только для чтения.
type ReadonlyProduct = Readonly<Product>;

// Utility Types
// Используйте встроенные utility-типы (Partial, Pick, Omit) для создания новых типов на основе интерфейса User.
type PartialUser = Partial<User>;
const user: PartialUser = {};
type PickUser = Pick<User, "id" | "name">;
const user1: PickUser = {
  id: 2,
  name: "egor",
};
type OmitUser = Omit<User, "email">;
const user2: OmitUser = {
  id: 3,
  name: "egor2",
};
console.log(user);
console.log(user1);
console.log(user2);
//Перегрузка функций
//Напишите функцию add, которая может принимать либо два числа, либо две строки, и возвращает их сумму (для чисел) или конкатенацию (для строк).
// Сигнатуры перегрузки
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // Сумма чисел
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b; // Конкатенация строк
  } else {
    throw new Error("Аргументы должны быть либо числами, либо строками");
  }
}
//Типизация промисов
//Напишите функцию fetchData, которая возвращает промис с данными типа User. Используйте async/await для обработки промиса.

async function fetchData(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Igor",
        email: "fuck@e,ail.ru",
      });
    }, 2000);
  });
}
async function main() {
  try {
    const user = await fetchData();
    console.log(user);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

main();

//Типизация API
//Создайте интерфейс для ответа API, который возвращает список пользователей.
// Ответ должен содержать поле users (массив объектов User) и поле total (число).

interface UserResponse {
  users: User[];
  total: number;
}
async function getAPI(): Promise<UserResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        users: [
          { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
          { id: 2, name: "Jane Smith", email: "jane@example.com" },
          {
            id: 3,
            name: "Alice Johnson",
            email: "alice@example.com",
            role: "user",
          },
        ],
        total: 100,
      });
    }, 3000);
  });
}
async function getUsers() {
  try {
    const users = await getAPI();
    console.log(users);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}
getUsers();

//Типизация форм
//Создайте интерфейс FormData для данных формы, которая содержит поля name (строка), email (строка) и age (число).
//Добавьте валидацию, чтобы age было положительным числом.

interface FormData {
  name: string;
  email: string;
  age: number;
}
function validateFormData(data: FormData): data is FormData {
  if (!data.name || typeof data.name !== "string") {
    console.error("Поле 'name' должно быть строкой.");
    return false;
  }

  if (!data.email || typeof data.email !== "string") {
    console.error("Поле 'email' должно быть строкой.");
    return false;
  }

  if (typeof data.age !== "number" || data.age <= 0) {
    console.error("Поле 'age' должно быть положительным числом.");
    return false;
  }

  return true;
}

//Типизация событий
//Напишите функцию handleClick, которая принимает объект события (например, MouseEvent) и выводит координаты клика
function handleClick(e: MouseEvent) {
  const { clientX, clientY } = e;
  console.log(`Координаты клика: X = ${clientX}, Y = ${clientY}`);
}
