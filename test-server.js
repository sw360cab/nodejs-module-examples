var http = require('http');
var basic = require('./basic');
var singleton = require('./singleton');
var objNo = require('./obj-no-instance');

var obj = require('./obj-instance');
var objVersion2 = require('./obj-instance').ObjInstance;

http.createServer(function (req, res) {

  var index = 0;
  var intervalId = setInterval(function(){
    if (index == 0){
      console.log('basic');
      basic.foo();
      basic.bar();
    }
    else if (index == 1){
      console.log('\nstatic');
      singleton.foo();
      singleton.bar();
    }
    else if (index == 2){
      console.log('\nobject no instance');
      var newObj = new objNo();
      
      newObj.foo();
      newObj.bar();
    }
    else if (index == 3){
      console.log('\nobject instanciated');
      obj.foo();
      obj.bar();
    }
    else if (index == 4){
      console.log('\nobject instanciated - 2nd version');
      console.log('alternative - constructor exported');
      var newObj = new objVersion2();
      
      newObj.foo();
      newObj.bar();
    }  
    else {
      console.log('\nthank you... ending process');
      clearInterval(intervalId);
      process.exit(0);
    }
    
    index++;
  },3000);

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Done\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
