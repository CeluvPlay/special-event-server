// external imports
import jwt from 'jsonwebtoken'

// let's genarate access token
export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, {expiresIn: '2d'})
}