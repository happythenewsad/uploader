var util = require('util');

function route(handle, pathname, response, request) {
  /*console.log("exports object: " + util.inspect(exports, false, null));
  console.log("About to route a request for " + pathname);
  console.log("the handle is: " +util.inspect(handle, false, null));*/
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("404 Not found");
	response.end();
  }
}

exports.route = route;