import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: '33341',
        name: 'Arfat islam Arfat islam',
        age: 20
    });
    await user.save();
    return user;
};