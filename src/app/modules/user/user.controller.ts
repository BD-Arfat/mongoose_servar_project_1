import { NextFunction, Request, Response } from "express";
import { createUserToDB } from "./user.service";

export const createUser = (req: Request, res: Response, next: NextFunction) => {

    const user = createUserToDB();
    res.status(200).json({
        message: "User Created Successfully",
        data: user
    });

    // res.send('Hello World!');
    // next();
}