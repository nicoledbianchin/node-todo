var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function () {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@nodetodosample.l0flp.mongodb.net/nodetodo?retryWrites=true&w=majority`
    }
}