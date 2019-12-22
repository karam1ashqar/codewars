// https://www.codewars.com/kata/insert-value-into-an-array/javascript

Object.defineProperty(Array.prototype, 'insert', {
  enumerable: false,
  value: function(idx, val) {
    this.splice(idx, 0, val);
    return this;
  }
});
