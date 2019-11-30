// This code is adopted from npm package "math-random" under MIT License
// https://github.com/michaelrhodes/math-random

/*!

Copyright 2019 Michael Rhodes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

window.MathRandom = (function (global) {
  var uint32 = 'Uint32Array' in global
  var crypto = global.crypto || global.msCrypto
  var rando = crypto && typeof crypto.getRandomValues === 'function'
  var good = uint32 && rando
  if (!good) return Math.random

  var arr = new Uint32Array(1)
  var max = Math.pow(2, 32)
  function random () {
    crypto.getRandomValues(arr)
    return arr[0] / max
  }

  random.cryptographic = true
  return random
})(typeof self !== 'undefined' ? self : window)
