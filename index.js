exports.isMonitoringModule = true;
exports.hasCron = true;

var os = require('os');

exports.executeCron = function (callback) {
    memoryData(function(err, data){
        if(err)
            callback(err);
        if(data)
            callback(null, data);
    });
}

var memoryData = function(callback){
    var data = {
        freeMemory: os.freemem(),
        totalMemory: os.totalmem()
    };

    callback(null, data);
}