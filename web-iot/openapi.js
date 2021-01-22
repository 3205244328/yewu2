const Core = require('@alicloud/pop-core');

var client = new Core({
    accessKeyId: 'LTAI4FooYLqYmMzzoiRuh93F',
    accessKeySecret: 'jB2Vb1qEr6iJc5X7GQEG8MBmviKRFN',
    endpoint: 'https://iot.cn-shanghai.aliyuncs.com',
    apiVersion: '2018-01-20'
});

module.exports = {
    client: client
}