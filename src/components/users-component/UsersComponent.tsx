import { useEffect, useState } from "react";
import { IUser } from "../../models/IUser";
import { IUserResponseModel } from "../../models/IUserResponseModel.ts";
import { UserComponent } from "../user-component/UserComponent";
import { getUsers } from "../../services/api.service.ts";
import {useSearchParams} from "react-router";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams( {page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage)
            .then((response: IUserResponseModel) => {
                setUsers(response.users);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, [searchParams]);

    return (
        <div>
            {users.map((user: IUser) => (
                <UserComponent key={user.id} user={user} />
            ))}
        </div>
    );
};
