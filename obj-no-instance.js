function ObjNoInstance (){
  this.prop0;
  this.prop1;
}

// 'prototype' has improved performances
ObjNoInstance.prototype.foo = function() {
  console.log("hello");
};

ObjNoInstance.prototype.bar = function() {
  console.log("world");
};

module.exports = ObjNoInstance;
