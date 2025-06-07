import style from "./TodoInputField.module.css"

const TodoInputField = ({addTask}) => {

    return <>
        <div className={style["todo-input-container"]}>
            <input type="text" id="textInput" placeholder="Enter Todo Here"/>
            <input type="date" id="dateInput" />
            <button onClick={() => {
                addTask(
                document.getElementById("textInput").value.toString(),
                document.getElementById("dateInput").value.toString()
            );
            document.getElementById("textInput").value = "";
            document.getElementById("dateInput").value = "";
            }}>Add</button>
        </div>
    </>
}

export default TodoInputField;