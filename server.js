var http = require('http');
var fs = require('fs');
var port = 9000;

//404 response

function send404(res){
	res.writeHead(404, {"Content-Type": "text/plain"});
	res.write("Error 404: Say what!!!");
	res.end();
}

//handle a browser request
function onRequest(req, res){

	if(req.method === 'GET' && req.url === '/'){
		res.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream('./index.html').pipe(res);
	}
	else{
		send404(res);
	}
}



http.createServer(onRequest).listen(port);

console.log("got this beeotch fired up on port " + port);