import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserFromToDB } from "./user.service";

// create user
export const createUser = async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body;

    const user = await createUserToDB(data);
    res.status(200).json({
        message: "User Created Successfully",
        data: user
    });
}

// get user
export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUserFromToDB();
    res.status(200).json({
        message: 'get user successfully',
        data: user
    })
}