var mongoose = require('mongoose');

var testDB = "mongodb://localhost:27017/testapp";
mongoose.connect(testDB, function (err) {
    if (err) {
        console.log('fail');
    } else {
        console.log('success');
    }
});
module.exports = mongoose;