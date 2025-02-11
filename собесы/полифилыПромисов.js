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
