var http = require("http");
var url=require("url");


function startServer(route,handle){
function onRequest(request, response) {
  console.log("Request received.");
  var postData="";
  response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write("Hello World part 2");
  //response.write(url.parse(request.url).path);
  //route(url.parse(request.url).pathname);
  var pathname=url.parse(request.url).pathname;
  //var content=route(pathname,handle,response);
  //response.write(content);
  request.addListener("data", function(postDataChunk) {
    postData += postDataChunk;

    console.log("Received POST data chunk '"+
    postDataChunk + "'.");
  });

  request.addListener("end", function() {
    route(pathname,handle,  response);
  });
  //response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
}

exports.start=startServer;