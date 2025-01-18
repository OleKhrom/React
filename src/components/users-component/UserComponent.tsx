import {IUser} from "../../models/IUser";

interface IUserComponentProps {
    user: IUser;
}

export const UserComponent =({ user}: IUserComponentProps) => {
        return (
            <div>{user.username}</div>
        );
    };
