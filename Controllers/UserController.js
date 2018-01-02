var dbConnection = require('../DbHandler/DbManager');



exports.registerUser = function(data){
    var fullName = data.firstName+" "+data.lastName;
    var  registerData=[];
    registerData.push(fullName);
    registerData.push(data.firstName);
    registerData.push(data.lastName);
    registerData.push(data.email);
    registerData.push(data.password);
    var con = dbConnection();
    if (con){
        var query="INSERT INTO customers (name, fName, lName, Email, Password) VALUES (?,?,?,?,?);"
        con.query(query, registerData, function(err,result){
            if(!err)
                console.log(JSON.stringify(result))
            else
                console.log(JSON.stringify(err))
        })
    }
}