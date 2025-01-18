import {Link} from "react-router";
import {useRef} from "react";
export const MenuComponent = () => {
    const ulRef = useRef(null);
    return (
        <ul>
            <li>
                <Link to='/users' ref={ulRef}>users</Link>
            </li>
            <li>
                <Link to='/posts'>posts</Link>
            </li>
        </ul>
    )
}