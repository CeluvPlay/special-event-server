// external imports
import { Request, Response } from "express";

// internal imports 
import User from "../../models/user";


export default async (req: Request, res: Response) => {
  try {
    const { walletAddress } = req.body

    // find user by wallet address
    const user = await User.findOne({ walletAddress: walletAddress })

    // if user not found then create new user and return user data if user found then return user data
    if (!user) {
      const newUser = new User({ walletAddress: walletAddress, reward : 10 })
      await newUser.save()
      return res.status(200).json({ msg: "New user created", user: newUser._doc })
    } else {
      return res.status(200).json({ msg: "User found", user: user })
    }

  } catch (e) {
    return res.status(500).json({ msg: (e as Error).message, success: false })
  }
}