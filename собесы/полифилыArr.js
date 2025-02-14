// Array.prototype.forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    var T, k;
    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}

//Array.prototype.map
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    var T, A, k;
    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    A = new Array(len);
    k = 0;
    while (k < len) {
      var kValue, mappedValue;
      if (k in O) {
        kValue = O[k];
        mappedValue = callback.call(T, kValue, k, O);
        A[k] = mappedValue;
      }
      k++;
    }
    return A;
  };
}
// Array.prototype.filter
if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    var T, A, k;
    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    A = new Array();
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        if (callback.call(T, kValue, k, O)) {
          A.push(kValue);
        }
      }
      k++;
    }
    return A;
  };
}

//Array.prototype.reduce
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    var O = Object(this);
    var len = O.length >>> 0;
    var k = 0;
    var value;
    if (arguments.length == 2) {
      value = initialValue;
    } else {
      while (k < len && !(k in O)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      value = O[k++];
    }
    while (k < len) {
      if (k in O) {
        value = callback(value, O[k], k, O);
      }
      k++;
    }
    return value;
  };
}
//Array.prototype.find
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this == null) {
      throw new TypeError("Array.prototype.find called on null or undefined");
    }
    if (typeof predicate !== "function") {
      throw new TypeError("predicate must be a function");
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;
    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

__________________________________________________________________________________________;

///forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        callback.call(thisArg, this[i], i, this);
      }
    }
  };
}
///map
if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    let results = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        results[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    return results;
  };
}
///filter
if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    let results = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this && callback.call(thisArg, this[i], i, this)) {
        results.push(this[i]);
      }
    }
    return results;
  };
}
//reduce
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    if (this === null || this === undefined) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    let i = 0;
    let accumulator = initialValue;
    if (arguments.length < 2) {
      if (this.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = this[0];
      i = 1;
    }
    for (; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
}
//reduce
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue) {
    if (this === null || this === undefined) {
      throw new Error("called null of undefined ");
    }
    if (typeof callback !== "function") {
      throw new Error("callback is not a function ");
    }
    let i = 0;
    let accumulator = initialValue;
    if (arguments.length < 2) {
      if (this.length === 0) {
        throw new Error("initialValue empty");
      }
      accumulator = this[0];
      i = 1;
    }
    for (; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
}
