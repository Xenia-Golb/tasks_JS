(function (global) {
  // Проверяем, поддерживается ли Promise
  if (typeof global.Promise === "function") {
    return;
  }

  function Promise(executor) {
    var self = this;
    self.status = "pending";
    self.data = undefined;
    self.onResolvedCallback = [];
    self.onRejectedCallback = [];

    function resolve(value) {
      if (self.status === "pending") {
        self.status = "fulfilled";
        self.data = value;
        for (var i = 0; i < self.onResolvedCallback.length; i++) {
          self.onResolvedCallback[i](value);
        }
      }
    }

    function reject(reason) {
      if (self.status === "pending") {
        self.status = "rejected";
        self.data = reason;
        for (var i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](reason);
        }
      }
    }

    try {
      executor(resolve, reject);
    } catch (reason) {
      reject(reason);
    }
  }

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var self = this;
    var promise2;

    onFulfilled =
      typeof onFulfilled === "function"
        ? onFulfilled
        : function (value) {
            return value;
          };
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function (reason) {
            throw reason;
          };

    if (self.status === "fulfilled") {
      promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
          try {
            var result = onFulfilled(self.data);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (reason) {
            reject(reason);
          }
        }, 0);
      });
    }

    if (self.status === "rejected") {
      promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
          try {
            var result = onRejected(self.data);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (reason) {
            reject(reason);
          }
        }, 0);
      });
    }

    if (self.status === "pending") {
      promise2 = new Promise(function (resolve, reject) {
        self.onResolvedCallback.push(function (value) {
          try {
            var result = onFulfilled(value);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (reason) {
            reject(reason);
          }
        });

        self.onRejectedCallback.push(function (reason) {
          try {
            var result = onRejected(reason);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (reason) {
            reject(reason);
          }
        });
      });
    }

    return promise2;
  };

  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
  };

  Promise.resolve = function (value) {
    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (reason) {
    return new Promise(function (resolve, reject) {
      reject(reason);
    });
  };

  Promise.all = function (promises) {
    return new Promise(function (resolve, reject) {
      var result = [];
      var count = 0;

      function processData(index, data) {
        result[index] = data;
        count++;
        if (count === promises.length) {
          resolve(result);
        }
      }

      for (var i = 0; i < promises.length; i++) {
        promises[i].then(function (data) {
          processData(i, data);
        }, reject);
      }
    });
  };

  Promise.race = function (promises) {
    return new Promise(function (resolve, reject) {
      for (var i = 0; i < promises.length; i++) {
        promises[i].then(resolve, reject);
      }
    });
  };

  global.Promise = Promise;
})(typeof global === "undefined" ? this : global);

if (typeof Promise === "undefined") {
  function MyPromise(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // Функция для разрешения промиса
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        // Вызов всех колбеков на успешное выполнение
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    // Функция для отклонения промиса
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        // Вызов всех колбеков на отклонение
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    // Вызов executor с обработчиками resolve и reject
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error); // Если произошла ошибка в executor
    }
  }

  // Метод then для цепочки промисов
  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const self = this;

    // Возвращаем новый промис
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        try {
          if (typeof onFulfilled === "function") {
            const result = onFulfilled(self.value); // Получаем результат
            resolve(result); // Преобразуем результат в новый промис
          } else {
            resolve(self.value); // Просто передаем значение
          }
        } catch (error) {
          reject(error); // Обработка ошибок
        }
      };

      const handleRejected = () => {
        try {
          if (typeof onRejected === "function") {
            const result = onRejected(self.reason); // Получаем результат ошибки
            resolve(result); // Преобразуем результат в новый промис
          } else {
            reject(self.reason); // Просто передаем ошибку
          }
        } catch (error) {
          reject(error); // Обработка ошибок
        }
      };

      // В зависимости от состояния промиса, выполняем соответствующий обработчик
      if (self.state === "fulfilled") {
        handleFulfilled();
      } else if (self.state === "rejected") {
        handleRejected();
      } else {
        // Если промис в состоянии "pending", добавляем обработчики в очередь
        self.onFulfilledCallbacks.push(handleFulfilled);
        self.onRejectedCallbacks.push(handleRejected);
      }
    });
  };

  // Статический метод resolve для создания уже выполненного промиса
  MyPromise.resolve = function (value) {
    return new MyPromise((resolve) => resolve(value));
  };

  // Статический метод reject для создания отклонённого промиса
  MyPromise.reject = function (reason) {
    return new MyPromise((_, reject) => reject(reason));
  };

  // Статический метод all для ожидания выполнения всех промисов
  MyPromise.all = function (promises) {
    return new MyPromise((resolve, reject) => {
      let result = [];
      let completed = 0;
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => {
            result[index] = value;
            completed += 1;
            if (completed === promises.length) {
              resolve(result); // Все промисы выполнены
            }
          },
          (reason) => {
            reject(reason); // Если хотя бы один промис отклонён
          }
        );
      });
    });
  };

  // Статический метод race для выполнения первого промиса
  MyPromise.race = function (promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(resolve, reject); // Как только первый промис завершится
      });
    });
  };
}
