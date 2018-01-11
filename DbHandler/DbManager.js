var mysql = require('mysql');
var isConAlive = false;
var con="";
// var dbConfig;
var dbConnection = function(){
    if(!isConAlive){
        /*var con=mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"root"
        });*/
        var connection=connectDb(con, mysql, {
            host:"localhost",
            user:"root",
            password:"",
            database:"newdb"
        });
        isConAlive=connection.isAlive;
        return connection.connection;
    }else{
        if(connection)
            return connection.connection;
        else {
            isConAlive=false;
            dbConnection();
        }
    }
}


var connectDb = function (conn, mysql, config) {
    var isConnAlive = false;
    if (conn === "") {
        conn = mysql.createConnection(config);
        isConnAlive = true;
    }
    else if (conn.state === "disconnected") {
        conn.destroy();
        conn = mysql.createConnection(config);
        isConnAlive = true;
    }

    return {isAlive: isConnAlive, connection: conn};
};

module.exports = dbConnection;