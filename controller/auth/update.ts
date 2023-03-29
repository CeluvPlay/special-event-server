// external imports
import { Request, Response } from "express";

// internal imports 
import User from "../../models/user";


export default async (req: Request, res: Response) => {
  try {

    // destructure wallet address from request params
    const { walletAddress, point, ...rest } = req.body
    
    // find user by wallet address
    const user : any = await User.findOne({ walletAddress: walletAddress })

    // if user not found
    if (!user) {
        return res.status(400).json({ msg: "User not found" })
    }

    // if user found update data
    await User.findOneAndUpdate({ walletAddress: walletAddress },  { ...rest, $inc : { reward: point } })

    // return success message
    return res.status(200).json({ msg: "Updated" })

  } catch (e) {
    return res.status(500).json({ msg: (e as Error).message })
  }
}