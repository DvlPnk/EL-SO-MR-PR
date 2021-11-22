import { Document } from "mongoose";
export declare type UserDocument = User & Document;
export declare class User {
    email: string;
    name: string;
    lastName: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, {}>;