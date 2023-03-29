// external import
import mongoose from 'mongoose'

// internal imports
import { IUser } from '../config/interface'


// user schema
const userSchema = new mongoose.Schema({
  walletAddress : {
    type: String,
    required: [true, "Please add wallet address"],
  },

  discord: { type: String },
  twitter: { type: String },
  reward : { type: Number },

  bluechip : {
    default : { rewarded : false, complete : false, point : 0 },
    type: Object,
  },
  follow_twitter : {
    default : { rewarded : false, complete : false, point : 0 },
    type: Object,
  },
  wandership_alpha : {
    default : { rewarded : false, complete : false, point : 0 },
    type: Object,
  },
  tweet_rt : {
    default : { rewarded : false, complete : false, point : 0 },
    type: Object,
  },
  tweet_like : {
    default : { rewarded : false, complete : false, point : 0 },
    type: Object,
  },
  tweet_comment : {
    default : { rewarded : false, complete : false, point : 0 },
    type: Object,
  },
  friend_invitation : {
    default : { rewarded : false, complete : false, point : 0 },
    type: Object,
  }

}, {
  timestamps: true
})


// user model
export default mongoose.model<IUser>('User', userSchema)