onmessage = function(e) {
    console.info(e)
    var workerResult = 'Result: ' + (e.data);
    postMessage(workerResult);
  }