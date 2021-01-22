const mysql = require("mysql");
const client = require("../openapi");


module.exports = {
    selled(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'swt'
        })
        connection.connect();
        connection.query('select * from led order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },



    selfan(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'swt'
        })
        connection.connect();
        connection.query('select * from fan order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },



    selinfo(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'swt'
        })
        connection.connect();
        connection.query('select * from environment order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selheat(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'swt'
        })
        connection.connect();
        connection.query('select * from heat order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },

    selhumi(req, res) {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3306,
            database: 'swt'
        })
        connection.connect();
        connection.query('select * from humi order by time desc limit 1', function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log("查询成功");
            }
            res.send(JSON.stringify(result));
        });
        connection.end();
    },


    alisetLED(req, res) {
        // console.log("0000000000000000000000000000000000");
        // console.log(req.body.status);
        // console.log("0000000000000000000000000000000000");
        var status = req.body.status
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"LightStatus\":" + status + "}",
            "ProductKey": "a1EIRPWKkUk",
            "DeviceName": "713LED"
        }
        var requestOption = {
            method: 'POST'
        };

        client.client.request('SetDeviceProperty', params, requestOption).then((result) => {

            console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
            console.log(JSON.stringify(result));
            res.send({ succ: true })
        }, (ex) => {
            console.log(ex);
        })
    },
    alisetFeng(req, res) {
        // console.log("0000000000000000000000000000000000");
        // console.log(req.body.status);
        // console.log("0000000000000000000000000000000000");
        var status = req.body.status
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"WindSpeed\":" + status + "}",
            "ProductKey": "a1XCumFbQrL",
            "DeviceName": "Feng"
        }
        var requestOption = {
            method: 'POST'
        };

        client.client.request('SetDeviceProperty', params, requestOption).then((result) => {

            console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
            console.log(JSON.stringify(result));
            res.send({ succ: true })
        }, (ex) => {
            console.log(ex);
        })
    },
    alisetHeat(req, res) {
        // console.log("0000000000000000000000000000000000");
        // console.log(req.body.status);
        // console.log("0000000000000000000000000000000000");
        var status = req.body.status
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + "}",
            "ProductKey": "a1IiABXMdem",
            "DeviceName": "fire"
        }
        var requestOption = {
            method: 'POST'
        };

        client.client.request('SetDeviceProperty', params, requestOption).then((result) => {

            console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
            console.log(JSON.stringify(result));
            res.send({ succ: true })
        }, (ex) => {
            console.log(ex);
        })
    },
    alisetHumi(req, res) {
        // console.log("0000000000000000000000000000000000");
        // console.log(req.body.status);
        // console.log("0000000000000000000000000000000000");
        var status = req.body.status
        var params = {
            "RegionId": "cn-shanghai",
            "Items": "{\"PowerSwitch\":" + status + "}",
            "ProductKey": "a1Bn75TsD1d",
            "DeviceName": "jiashi"
        }
        var requestOption = {
            method: 'POST'
        };

        client.client.request('SetDeviceProperty', params, requestOption).then((result) => {

            console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
            console.log(JSON.stringify(result));
            res.send({ succ: true })
        }, (ex) => {
            console.log(ex);
        })
    },



}

// alisetFeng(req, res) {
//         var status = req.body.status
//         var params = {
//             "RegionId": "cn-shanghai",
//             "Items": "{\"WindSpeed\":" + status + "}",
//             "ProductKey": "a1XCumFbQrL",
//             "DeviceName": "Feng"
//         }
//         var requestOption = {
//             method: 'POST'
//         };

//         client.client.request('SetDeviceProperty', params, requestOption).then((result) => {

//             console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
//             console.log(JSON.stringify(result));
//             res.send({ succ: true })
//         }, (ex) => {
//             console.log(ex);
//         })
//     }，

// alisetfire(req, res) {
//         var status = req.body.status
//         var params = {
//             "RegionId": "cn-shanghai",
//             "Items": "{\"PowerSwitch\":" + status + "}",
//             "ProductKey": "a1IiABXMdem",
//             "DeviceName": "fire"
//         }
//         var requestOption = {
//             method: 'POST'
//         };
//         client.client.request('SetDeviceProperty', params, requestOption).then((result) => {

//             console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
//             console.log(JSON.stringify(result));
//             res.send({ succ: true })
//         }, (ex) => {
//             console.log(ex);
//         })
//     }， 

// alisetjiashi(req, res) {
//         var status = req.body.status
//         var params = {
//             "RegionId": "cn-shanghai",
//             "Items": "{\"PowerSwitch\":" + status + "}",
//             "ProductKey": "a1Bn75TsD1d",
//             "DeviceName": "jiashi"
//         }
//         var requestOption = {
//             method: 'POST'
//         };
//         client.client.request('SetDeviceProperty', params, requestOption).then((result) => {

//             console.log("sssssssssssssssssssssssssssssssssssssssssssssss");
//             console.log(JSON.stringify(result));
//             res.send({ succ: true })
//         }, (ex) => {
//             console.log(ex);
//         })
//     }
// }
