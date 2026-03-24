import { useState } from "react"


function ToDoList(){
    let [task, setTask] = useState([])
    

    function addTask(){
        const myVal = document.getElementById("myValue").value

        setTask([...task, myVal])

    }

    

    return(
        <>
        <ul>
                {task.map((t, index ) => <li key={index}>{t}</li>)} 

        </ul>
        <input type="text" id="myValue" placeholder="Enter Task"></input>
        <br></br>
        <br />
        <button onClick={addTask}>Add Task and Task Time</button>
        </>
    )
}

export default ToDoList