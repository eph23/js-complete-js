'use strict';

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This will NEVER run again');
})();

(() => console.log('This will ALSO NEVER run again'))();

{
  const isPrivet = 23;
  var notPrivate = 46;
}
// console.log(isPrivet)
console.log(notPrivate);
