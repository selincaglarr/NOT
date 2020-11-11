'use strict';
//islem.js kaydet

module.exports = {
  sayi1: 0,
  sayi2: 0,
  topla: function () {
    return this.sayi1 + this.sayi2;
  },
  cikar: function (s1, s2) {
    return this.sayi1 - this.sayi2;
  },
  carp: function (s1, s2) {
    return this.sayi1 * this.sayi2;
  },
  bol: function (s1, s2) {
    return this.sayi1 / this.sayi2;
  }
}

//'use strict';

const islem = require('./islem');

islem.sayi1 = 40;
islem.sayi2 = 10;

console.log(islem.topla());
console.log(islem.carp());
console.log(islem.cikar());
console.log(islem.bol());

console.log(module);
