import {Outlet} from "react-router";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";

export const PaginationLayout = () => {
    return (
        <>
            <Outlet/>
            <PaginationComponent/>
        </>
    );
};