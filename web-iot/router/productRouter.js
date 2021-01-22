const express = require("express");
const productCtrl = require("../controller/proctrl");
const router = express.Router();

// 新增数据
router.post("/addProduct", productCtrl.addProduct);

// 删除指定行的信息
router.post("/deleteProduct", productCtrl.deleteProduct);

// 确定修改
router.post("/updateProduct", productCtrl.updateProduct);

// 查询单个
router.get("/searchProduct/:id", productCtrl.searchProduct);

// 查询所有
router.get("/searchAllProduct", productCtrl.searchAllProduct);

module.exports = router;