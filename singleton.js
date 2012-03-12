var Static = {}; 

Static.foo = function() {
  console.log("hello");
};

Static.bar = function() {
  console.log("world");
};

module.exports = Static;
/*
 * or
 * var Static = exports;
 * var Static = module.exports
 *
 * but NOT
 * exports = Static;
 * because 'exports' just appends properties to 'module.export'
 */

