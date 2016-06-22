var connections = 0; // count active connections

self.addEventListener("connect", function (e) {

	var port = e.ports[0];
	connections++;

	port.addEventListener("message", function (e) {
        var workerResult = 'Result: ' + (e.data[0] * e.data[1]) + " connections: " + connections;
        port.postMessage(workerResult);
	}, false);

	port.start();

}, false);
