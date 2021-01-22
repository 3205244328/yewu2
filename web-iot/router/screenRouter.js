const express = require("express");
const router = express.Router();
const screenCtrl = require("../controller/screenCtrl");


router.get("/getled", screenCtrl.selled);

router.get("/getinfo", screenCtrl.selinfo);

router.get("/getfan", screenCtrl.selfan);

router.get("/getheat", screenCtrl.selheat);

router.get("/gethumi", screenCtrl.selhumi);

router.put("/alisetled", screenCtrl.alisetLED);

router.put("/alisethfan", screenCtrl.alisetFeng);

router.put("/alisetheat", screenCtrl.alisetHeat);

router.put("/alisethumi", screenCtrl.alisetHumi);

module.exports = router;