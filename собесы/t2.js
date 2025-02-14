// // Необходимо написать функцию, которую можно вызывать сколько угодно раз и эта
// // функция вернет сумму аргументов из всех предыдущих вызовов.

// // function sumArgs(arg) {
// //   let sum = arg;
// //   function sumF(ar) {
// //     sum += ar;
// //     return sumF;
// //   }
// //   sumF.toString = function () {
// //     return sum;
// //   };
// //   return sumF;
// // }
// // console.log(sumArgs(1)(5)(4));

// // Реализуйте функцию sum, которая принимает неограниченное количество чисел в качестве аргументов и возвращает их сумму. Вызов функции без аргументов должен вернуть 0. В случае, если аргумент не является числом и не может быть приведен к таковому, нужно проигнорировать его. Если его можно привести к числу, то приведите его и прибавьте, как и обычное число.

// console.log(sumArgs(1, 2, 3, 4, 5, 6)); // 21
// // console.log(
// //   sum(-10, 15, 100),
// // ); // 105
// // console.log(
// //   sum(),
// // ); // 0
// console.log(sumArgs(1, "fqwfqwf", {}, [], 3, 4, 2, true, false));

// function sumArgs() {
//   let sum = 0;
//   let args = arguments;
//   Array.from(args);
//   for (let i = 0; i < args.length; i++) {
//     if (typeof args[i] === "number") {
//       sum += args[i];
//     } else if (!args.length) {
//       return 0;
//     }
//   }
//   return sum;
// }

// // Реализуйте функцию unique, которая принимает массив в качестве аргумента и возвращает новый массив, в котором содержатся только уникальные значения из исходного массива. Исходный массив не должен изменяться.

// // Порядок элементов должен сохраняться.

// const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]

// const obj = { name: "John" };
// const data2 = [obj, obj, obj, { name: "John" }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// function unique(arr) {
//   return [...new Set(arr)];
// }
// // Реализуйте функционал для работы с книгами в библиотеке:

// // создание книги(добавление новой книги в библиотеку)
// // Выдача книги читателю
// // Получение книги от читателя
// // Получение у кого книга сейчас находится
// // Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

// // name - имя книги
// // author - имя автора
// // year - год книги
// // reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null
// // Необходимо реализовать на прототипе следующие методы работы с книгой:

// // isAvailable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
// // takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
// // returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
// // changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
// // changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
// // getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи
// class Book {
//   constructor (name,author,year,reader) {
//     this.name = name;
//     this.author = author ;
//     this.year = year;
//     this.reader = reader;
//   }
//   Book.prototype.isAvailable = function (){
//      return this.reader === null;
//   }
//   Book.prototype.takeBook = function(readerName){
//      if (!this.isAvailable) return false;
//      this.reader = readerName;
//      return true;
//   }
//   Book.prototype.returnBook = function(){
//      if (!this.isAvailable) {
//          this.reader = null
//          return true;
//      }
//      return false;
//   }
//   Book.prototype.changeBookName = function(newBookName){
//       if(this.name === newBookName) return false;
//       this.name = newBookName;
//       return true;
//   }
//   Book.prototype.changeAuthorName = function(newAuthorName) {
//       if(this.author === newAuthorName) return false;
//       this.author = newAuthorName;
//       return true;
//   }
//    Book.prototype.getCurrentReader =function(){

//    }

// }
// Транслятор событий
// Cоздайте класс EventEmitter для управления событиями. У этого класса должны быть следующие методы:
// .on(event, callback) - добавить обработчик события

// .off(event, callback) - удалить обработчик события

// .once(event, callback) - добавить обработчик события, который сработает единожды

// .emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы

// Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать все обработчики всех событий:
// emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
// Event Emitter можно перевести как “транслятор” событий.

// Представьте себе такую ситуацию: происходит какое-то событие, например пользователь кликнул на кнопку, на которое должны отреагировать разные участки программы. Чтобы проще организовать такую логику, используют шаблон Event Emitter, который можно реализовать разными способами. Основная идея в том, чтобы грамотно создать основу для управления событиями и реализовать возможность любым элементам “подписаться” на него (и быть в курсе происходящего).

// Пример #1:

// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let h1 = document.querySelector('h1');

// let emitter = new EventEmitter();

// emitter.on('event:name-changed', data => {
//   h1.innerHTML = New value is: ${data.name};
// });
// /*
// подписываемся на событие 'event:name-changed' и передаём обработчик вторым аргументом. Теперь при возникновении этого события, мы будем вызывать обработчик и обновим текст заголовка при возникновении этого события.
// */

// button.addEventListener('click', () => {
//   emitter.emit('event:name-changed', {name: input.value});
// });
// /*
// добавляем обработчик события 'клик' на кнопку. Этот обработчик производит событие 'event:name-changed' и вызывает все функции, подписанные на это события, передавая им строку из input.
// */
// Пример #2:

// let emitter = new EventEmitter();

// const multiplyTwo = (num) => num * 2;
// const multiplyThree = (num) => num * 3;

// const divideTwo = (num) => num / 2;
// const divideThree = (num) => num / 3;

// // Добавляем для события multiplication два обработчка
// emitter.on('multiplication', multiplyTwo);
// emitter.on('multiplication', multiplyThree);

// // Вызываем событие multiplication, должны вызвать все обработчики для этого события - multiplyTwo и multiplyThree
// emitter.emit('multiplication', 2);
// // -> 4
// // -> 6

// // Удалим обработчик multiplyThree для события multiplication
// emitter.off('multiplication', multiplyThree);

// // Еще раз вызываем событие multiplication, теперь срабатывает только один обработчик multiplyTwo
// emitter.emit('multiplication', 2);
// // -> 4

// // Создадим новое событие divideTwo и добавим два обработчика:
// // divideTwo - срабатывает всегда, когда вызывается событие division (до тех пор, пока не удалим этот обработчик)
// //  divideThree - сработает только ОДИН раз, во время первого ВЫЗОВА события division
// emitter.on('division', divideTwo);
// emitter.once('division', divideThree);

// // Вызываем событие division - срабатывают обработчики divideTwo и divideThree
// emitter.emit('division', 6);
// // -> 3
// // -> 2

// // Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
// emitter.emit('division', 6);
// // -> 3

// // Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
// emitter.emit('division', 6);
// // -> 3

// let broadcastEmitter = new BroadcastEventEmitter();

// broadcastEmitter.on('multiplication', multiplyTwo);
// broadcastEmitter.on('multiplication', multiplyThree);
// broadcastEmitter.on('division', divideTwo);
// broadcastEmitter.on('division', divideThree);

// // Вызываем все события (multiplication и division) => все обработчики для всех событий будут вызваны.
// // Для события multiplication - вызовутся обработчики multiplyTwo и multiplyThree.
// // Для события division - вызовутся обработчики divideTwo и divideThree.
// broadcastEmitter.emit('*', 6);
// // -> 12
// // -> 18
// // -> 3
// // -> 2

//  class EventEmitter {
//      constructor(event){

//      this.event ={
//      }

//      }

//      on(event, callback){
//         if (this.event[event]!== undefined ){  //true
//             this.event[event].push(callback)
//         }else {
//             this.event[event] =[callback];
//         }

//         !this.events[eventName] && (this.events[eventName] = []);
//         this.events[eventName].push(callback);
//      }
//      off(event, callback) {
//       this.event[event]= this.event[event].filter((item) => callback!==item)

//      }
//      once(event, callback) { // foo
//          let newCallback =(...args)=>{ // newCallback
//              this.off(event, newCallback);
//              callback(...args) //foo
//          }
//          this.on(event,newCallback) // newCallback

//      }
//      emit(event, ...arg){
//          if(this.event[event]){
//              this.event[event].forEach((fn)=>{
//                  fn.aply(null,arg)
//              })
//          }
//      }
//  }
