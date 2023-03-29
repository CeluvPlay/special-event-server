// external imports
import { Request, Response } from "express";

// internal imports 
import User from "../../models/user";


export default async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    // find user by wallet address
    const user = await User.findOne({ walletAddress: id })

    // if user not found
    if (!user) {
        return res.status(400).json({ msg: "User not found" })
    }

    // if user found return the user
    return res.status(200).json({ user })


  } catch (e) {
    return res.status(500).json({ msg: (e as Error).message })
  }
}