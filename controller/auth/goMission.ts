// external imports
import { Request, Response } from "express";

// internal imports 
import User from "../../models/user";


export default async (req: Request, res: Response) => {
  try {
    const { mission_key, walletAddress } = req.body

    // find user by wallet address
    const user : any = await User.findOne({ walletAddress: walletAddress })

    // if user not found
    if (!user) {
        return res.status(400).json({ msg: "User not found" })
    }

    // if user found
    // check if mission is already completed
    if (user[mission_key].complete) {
        return res.status(400).json({ msg: "Mission already completed" })
    }

    // if mission is not completed
    // update mission status by find by walletaddress and update mission complete as true
    await User.findOneAndUpdate({ walletAddress: walletAddress }, { $set: { [`${mission_key}.complete`]: true } })
    
    // return success message
    return res.status(200).json({ msg: "Mission completed" })


  } catch (e) {
    return res.status(500).json({ msg: (e as Error).message })
  }
}