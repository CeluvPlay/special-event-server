import { Document } from "mongoose"


export interface IUser extends Document{
    walletAddress: string
    username: string
    email: string
    password: string
    role: string
    _id: string
    _doc: object
}


export interface INewUser {
    name : string
    email : string
    username: string
    role: string
}

export interface IDecoded extends INewUser {
    id ?: string
    new_user ?: INewUser
    iat: number
    exp: number
}


export interface RDecoded {
    id ?: string
    iat: number
    exp: number
}