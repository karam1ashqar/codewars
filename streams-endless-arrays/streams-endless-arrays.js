var Stream = function(start, output, stepping) {
  this.curr = start;
  this._get = output;
  this._next = stepping;
};
Stream.prototype = {
  head: function() {
    return this._get(this.curr);
  },
  tail: function() {
    return new Stream(this._next(this.curr), this._get, this._next);
  }
};