const pins = require('../mongoModels/Pins')

module.exports = {
    
    create: function(params, callback){

        pins.create(params, function(err, result){
            if(err){
                callback(err, null);
                return
            }
            console.log(result)
            callback(null, result);
        });
    }
}