// external imports
import { Router } from "express";


// internal imports
import connectWallet from "../controller/auth/connectWallet";
import getReward from "../controller/auth/getReward";
import getUser from "../controller/auth/getUser";
import goMission from "../controller/auth/goMission";
import update from "../controller/auth/update";


// global variables
const router = Router()

// setup all router
router.post('/connect-wallet', connectWallet)

router.get('/get-user/:id', getUser)

router.patch('/go-mission', goMission)
router.patch('/get-reward', getReward)
router.patch('/update', update)


export default router