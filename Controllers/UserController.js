var dbConnection = require('../DbHandler/DbManager');



exports.registerUser = function(data){
    var fullName = data.firstName+" "+data.lastName;
    var  registerData=[];
    //registerData.push(fullName);
    registerData.push(data.firstName);
    registerData.push(data.lastName);
    registerData.push(data.email);
    registerData.push(data.password);
    var con = dbConnection();
    if (con){
        var query="INSERT INTO Users (firstName, lastName, Email, Password) VALUES (?,?,?,?);"
        con.query(query, registerData, function(err,result){
            if(!err)
                console.log(JSON.stringify(result))
            else
                console.log(JSON.stringify(err))
        })
    }
}

exports.logIn = function (data, callback) {
    var loginData=[];
    loginData.push(data.Email);
    loginData.push(data.Password);
    var con = dbConnection();
    if(con){
        var query = "SELECT * FROM Users WHERE Email=? and Password=?";
        con.query(query, loginData, function (err, result) {
            if(!err)
                callback(result);
            else
                throw err;
        })
    }
}