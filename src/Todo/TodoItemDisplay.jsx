import style from './TodoItemDisplay.module.css';

const TodoItemDisplay = ({data , onDelete,index}) => {
    return <div className={style["todot-item-display-main-container"]}>
        <h3 id={style["task"]}>{data.task}</h3>
        <h3 id={style["date"]}>{data.date}</h3>
        <button onClick={() => onDelete(index)}>delete</button>
    </div>
}

export default TodoItemDisplay;