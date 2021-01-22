const express = require("express");
const deviceCtrl = require("../controller/devctrl");
const router = express.Router();

// 新增数据
router.post("/addDevice", deviceCtrl.addDevice);

// 删除指定行的信息
router.post("/deleteDevice", deviceCtrl.deleteDevice);

// 查询单个
router.get("/searchDevice/:id", deviceCtrl.searchDevice);

// 查询所有
router.get("/searchAllDevice", deviceCtrl.searchAllDevice);

module.exports = router;