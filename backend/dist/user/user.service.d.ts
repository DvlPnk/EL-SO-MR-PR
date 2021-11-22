import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(newUserInfo: UserInfo): Promise<string>;
    auth(authUser: Auth): Promise<string>;
}
