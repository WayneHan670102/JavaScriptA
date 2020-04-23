var startServer=require("./server");
var route=require("./route");
var requsestHandler=require("./requestHandlers");

var handle={}
handle['/']=requsestHandler.down;
handle['/aaa']=requsestHandler.down;
handle['/bbb']=requsestHandler.upload;
startServer.start(route.route,handle);
//startServer.start();