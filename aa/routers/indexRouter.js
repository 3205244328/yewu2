const exp = require('express')
const router = exp.Router();
const userCtrl = require("../controller/userCtrl")
const fanCtrl = require("../controller/fengCtrl")
const ledCtrl = require("../controller/ledCtrl")
const tempCtrl = require("../controller/tempCtrl")
const shiduCtrl = require("../controller/shiduCtrl")
const eCtrl = require("../controller/eCtrl")
const eqCtrl = require("../controller/eqCtrl")
const humiCtrl = require("../controller/humiCtrl")
const heatCtrl = require("../controller/heatCtrl")
const temp1Ctrl = require("../controller/temp1Ctrl")

router.put('/led/:id/:status', ledCtrl.led)
router.put('/ledon', ledCtrl.ledon)
router.put('/ledoff', ledCtrl.ledoff)

router.put('/temp/:id/:values', tempCtrl.temp)
router.put('/hum/:id/:values', shiduCtrl.hum)
router.put('/temp1/:id/:values', temp1Ctrl.temp1)

router.put('/fan/:id/:status', fanCtrl.fan)
router.put('/fan/off', fanCtrl.fanoff)
router.put('/fan/low', fanCtrl.fanlow)
router.put('/fan/high', fanCtrl.fanhigh)


router.put('/humi/:id/:status', humiCtrl.humi)
router.put('/humi/humion', humiCtrl.humion)
router.put('/humi/humioff', humiCtrl.humioff)

router.put('/heat/:id/:status', heatCtrl.fire)
router.put('/heat/heaton', heatCtrl.fireon)
router.put('/heat/heatoff', heatCtrl.fireoff)

router.post("/login", userCtrl.login);
router.get("/checks", userCtrl.checks);
router.post("/delete", userCtrl.delete);
router.post("/update", userCtrl.update);

router.post("/add", eqCtrl.add)
router.get("/checks1", eqCtrl.serch)
router.get("/checks2/:id", eqCtrl.search)
router.post("/change1", eqCtrl.update)
router.post("/delete1", eqCtrl.delete)

router.put("/env/:id/:temp/:humd", eqCtrl.echarts)
router.get("/env/:id/:count", eqCtrl.echarts1)

router.put("/env1/:id/:temp1", eCtrl.echart)
router.get("/env1/:id/:count", eCtrl.echart1)

module.exports = router;