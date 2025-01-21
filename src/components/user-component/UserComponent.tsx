import { IUser } from "../../models/IUser.ts";

interface UserComponentProps {
    user: IUser;
}

export const UserComponent: React.FC<UserComponentProps> = ({ user }) => {
    return (
        <div> {user.id} {user.username}</div>
    );
};
