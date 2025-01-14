import {ITodo} from "../models/ITodo.ts";
import './Todo.css';

interface TodoComponentProps {
    item: ITodo
}

export const TodoComponent = ({ item }: { item: ITodo }) => {
    return (
        <div>
            <h3 className={item.completed ? 'complete' : 'non-complete'}>
                {item.title}
            </h3>
        </div>
    );
};

