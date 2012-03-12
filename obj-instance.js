function ObjInstance (){
  this.prop0;
  this.prop1;

  var _privilegedMethod = function (){};


  // bad - un'istanza del metodo è creata con ogni new
  this.privilegedMethod = function (){};
  
  /*return { 
    this.publicMethod = function (){};
  }*/
}

// 'prototype' has improved performances
ObjInstance.prototype.foo = function() {
  console.log("hello");
};

ObjInstance.prototype.bar = function() {
  console.log("world");
};

// if I want to export constructor as well I should do
// exports = module.exports 
// only 'module.exports' is NOT enough
exports = module.exports = new ObjInstance();

// exporting ALSO constructor (optional)
// Ok also with "module.exports"
exports.ObjInstance = ObjInstance;

