const stuDao = require('../dao/app1Dao');
const { temp1 } = require('./temp1Ctrl');
module.exports = {
    add(req, resp) {
        let id = req.body.id;
        let type = req.body.type;
        let value = req.body.value;
        let cz = req.body.cz;
        var sq = "INSERT INTO device (id,type,value,cz) VALUES (?,?,?,?);";
        stuDao.getStuDao(sq, [id, type, value, cz], function (err, data) {
            resp.send({ succ: true });
            resp.end();
        })
    },
    update(req, resp) {
        let id = req.body.id;
        let type = req.body.type;
        let value = req.body.value;
        let cz = req.body.cz;
        var s = "UPDATE device SET type=? ,value = ?,cz=? WHERE id = ?";
        stuDao.getStuDao(s, [type, value, cz, id], function (err, data) {
            resp.send({ succ: true });
            console.log(err)
            resp.end();
        })
    },
    serch(req, resp) {
        var sql = "SELECT * FROM device;";
        stuDao.getStuDao(sql, [], function (err, result) {
            let queryData = JSON.stringify(result);
            console.log(queryData);
            resp.send(queryData);
            resp.end();
        })
    },
    search(req, resp) {
        const id = req.params['id'];
        console.log(id)
        var sql = "SELECT * FROM device WHERE id=" + id;
        stuDao.getStuDao(sql, [], function (err, result) {
            let queryData = JSON.stringify(result);
            console.log(queryData);
            resp.send(queryData);
            resp.end();
        })
    },
    delete(req, resp) {
        var id = req.body.id
        console.log(id);
        var z = "DELETE FROM device WHERE id=" + id;
        stuDao.getStuDao(z, [], function (err, result) {
            resp.send({ succ: true });
            resp.end();

        })
    },
    echart(req, resp) {
        const id = req.params["id"];
        const temp1 = req.params["temp1"];
        let sql = 'INSERT INTO environ VALUES(\'' + id + '\',' + Date.now() + ',' + temp1 + ')';
        console.log(sql);
        stuDao.getStuDao(sql, [], function (err, result) {
            //console.log(err);
            if (err) {
                console.log('[UPDATE ERROR] - ', err.message);
                resp.send('修改失败');
                return;
            }
            resp.send({ id: id, status: 'success' });
            resp.end();
        })
    },
    echart1(req, resp) {
        const id = req.params["id"];
        const count = req.params["count"];
        var sql = "SELECT * from environ WHERE id='" + id + "' order by time desc limit " + count;
        console.log(sql);
        stuDao.getStuDao(sql, [], function (err, result) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                resp.send(JSON.stringify({
                    succ: false,
                    msg: '查询失败！',
                }));
                return;
            }
            const resp1 = {
                id: id,
                data: result
            };
            console.log(JSON.stringify(resp1));
            resp.send(JSON.stringify(resp1));
            resp.end();
        })
    }
}