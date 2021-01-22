
const stuDao = require('../dao/app1Dao')
const iot = require('alibabacloud-iot-device-sdk');
const device = iot.device({
  productKey: 'a1HFRMTyrrQ', //将<productKey>修改为实际产品的ProductKey
  deviceName: 'wenshidu',//将<deviceName>修改为实际设备的DeviceName
  deviceSecret: '6bb6c4d2bbbf8ffcf28a095c78f5f5b8',//将<deviceSecret>修改为实际设备的DeviceSecret
})
device.on('connect', () => {
  //将<productKey> <deviceName>修改为实际值
  device.subscribe('/a1HFRMTyrrQ/wenshidu/user/get');
  // console.log('connect successfully!');
  //发送消息给谁
  device.publish('/a1HFRMTyrrQ/wenshidu/user/update', 'hello world!');
});
device.on('message', (topic, payload) => {
  //  /   console.log(topic, payload.toString());
});
const cz = "on"
module.exports = {
  hum(req, resp) {
    const id = req.params['id'];
    const values = req.params['values']

    //console.log("1111")
    var zz = [id, 'hum', values, cz];
    var zzz = [values, cz, id]
    stuDao.getStuDao("INSERT INTO device (id,type,value,cz) VALUES (?,?,?,?)", zz, function (err, data) {
      if (err) {
        // console.log('[SELECT ERROR] - ',err.message);
        return;
      }
    })
    var sql = 'UPDATE device SET value = ?, cz= ? WHERE id = ?';
    stuDao.getStuDao(sql, zzz, function (err, data) {
      if (err) {
        //console.log('[SELECT ERROR] - ',err.message);
        return;
      }
    })
    humi = parseInt(values);
    device.postProps({
      CurrentHumidity: humi
    }, (res) => {
    });
    resp.end();
  }
}