import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <div>
            <>
                <Outlet/>
            </>
            <UsersComponent/>
        </div>
    );
};