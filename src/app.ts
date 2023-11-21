import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {


    // interface
    interface IUser {
        id: string;
        name: string;
        age: number;
    }

    const userSchema = new Schema<IUser>({
        name: { type: String, required: true },
        id: { type: String, required: true },
        age: { type: Number, required: true },
    });

    const User = model<IUser>('User', userSchema);

    const createUserToDB = async() =>{
        const user = new User({
            id : '33336',
            name : 'Ariful islam Arfat',
            age : 18
        });
        await user.save();
    };
    
    createUserToDB()


    // res.send('Hello World!');
    // next();
});


export default app;