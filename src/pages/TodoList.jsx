import React, { useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const TaskListCard = ({ id, isCompleted, task, taskList, setNewTaskList }) => {
  console.log("prev", taskList);

  function updateTaskStatus() {
    let newTask = taskList[id];
    if (taskList[id].isCompleted) {
      newTask = { ...taskList[id], isCompleted: false };
    } else {
      newTask = { ...taskList[id], isCompleted: true };
    }
    taskList.splice(id, 1, newTask);
    console.log("updated task list", taskList);
    setNewTaskList([...taskList]);
    localStorage.setItem("tasklist",JSON.stringify([...taskList]))
    // const newTaskList = taskList.splice(id,1,{})
  }

  function deleteTask() {
    console.log(taskList[id]);
    console.log("index of delete item", id);
    taskList.splice(id, 1);
    console.log("new task list", taskList);
    setNewTaskList([...taskList]);
    localStorage.setItem("tasklist",JSON.stringify([...taskList]))
  }
  return (
    <div
     
      className=" flex  py-3 px-2 bg-slate-500  rounded-md items-center justify-between border-gray-300"
    >
      <div className="flex gap-2 ">
        <div
          onClick={updateTaskStatus}
          className="size-6 bg-white cursor-pointer border-2 rounded-full"
        >
          {isCompleted && (
            <IoCheckmarkDoneCircle className="size-full text-indigo-600" />
          )}
        </div>
        <h3
          className={`capitalize font-semibold  ${
            isCompleted ? "line-through text-black" : "text-white"
          } `}
        >
          {task}
        </h3>
      </div>
      <MdDeleteForever
        onClick={deleteTask}
        className="cursor-pointer hover:scale-110"
        size={24}
        color="red"
      />
    </div>
  );
};

const TodoList = () => {
  const previousTasks = JSON.parse(localStorage.getItem("tasklist"));
  console.log("prevTasklist", previousTasks);
  const taskInputRef = useRef();
  const [tasks, setTasks] = useState(previousTasks); // task list
  const [newTask, setNewTask] = useState("");
  let sectionStyle = {
    height: "100vh",
    width: "100vw",
    background: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  function storeNewTask(e) {
    setNewTask({ task: e.target.value, isCompleted: false });
  }
  function addTaskToList() {
    setTasks((prev) => [...prev, newTask]);
    taskInputRef.current.value = "";
    localStorage.setItem("tasklist", JSON.stringify([...tasks, newTask]));
  }

  return (
    <section style={sectionStyle}>
      <div className="w-1/2 h-2/3 bg-slate-600 flex flex-col gap-y-7 rounded-md p-6">
        <h1 className="text-center text-cyan-500 text-3xl font-bold">
          TODO LIST
        </h1>
        <div className="flex items-center gap-3">
          <input
            ref={taskInputRef}
            onChange={storeNewTask}
            type="text"
            placeholder="Enter your task"
            className="w-full bg-slate-500 text-white outline-none rounded-sm p-2"
          />
          <button
            onClick={addTaskToList}
            className="p-1 bg-cyan-500 w-12 h-[38px] flex justify-center items-center text-2xl"
          >
            +
          </button>
        </div>
        {/* -------------results ----------- */}
        <div className="flex flex-col gap-y-2" id="taskList">
          {tasks.map((task, idx) => (
            <div key={idx}>
              {" "}
              <TaskListCard
                taskList={tasks}
                setNewTaskList={setTasks}
                id={idx}
                task={task.task}
                isCompleted={task.isCompleted}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
