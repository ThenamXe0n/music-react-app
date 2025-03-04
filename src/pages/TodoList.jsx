import React, { useEffect, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const TaskListCard = ({ id, isCompleted, task, taskList, setNewTaskList }) => {
  function updateTaskStatus() {
    let updatedTask = { ...taskList[id], isCompleted: !taskList[id].isCompleted };
    const updatedList = [...taskList];
    updatedList[id] = updatedTask;

    setNewTaskList(updatedList);
    localStorage.setItem("tasklist", JSON.stringify(updatedList));
  }

  function deleteTask() {
    const updatedList = taskList.filter((_, index) => index !== id);
    setNewTaskList(updatedList);
    localStorage.setItem("tasklist", JSON.stringify(updatedList));
  }

  return (
    <div className="flex py-3 px-2 bg-slate-500 rounded-md items-center justify-between border-gray-300">
      <div className="flex gap-2">
        <div
          onClick={updateTaskStatus}
          className="size-6 bg-white cursor-pointer border-2 rounded-full"
        >
          {isCompleted && <IoCheckmarkDoneCircle className="size-full text-indigo-600" />}
        </div>
        <h3 className={`capitalize font-semibold ${isCompleted ? "line-through text-black" : "text-white"}`}>
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
  const previousTasks = JSON.parse(localStorage.getItem("tasklist")) || [];
  const taskInputRef = useRef();
  const [tasks, setTasks] = useState(previousTasks);
  const [newTask, setNewTask] = useState({ task: "", isCompleted: false });

  function storeNewTask(e) {
    setNewTask({ task: e.target.value, isCompleted: false });
  }

  function addTaskToList() {
    if (!newTask.task.trim()) return; // Prevent empty tasks

    setTasks((prev) => {
      const updatedTasks = [...prev, newTask];
      localStorage.setItem("tasklist", JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    setNewTask({ task: "", isCompleted: false });
    taskInputRef.current.value = "";
  }

  function handleKeyPress(ev) {
    if (ev.key === "Enter") {
      addTaskToList();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <section className="h-screen w-screen bg-black flex flex-col justify-center items-center p-5">
      <div className="w-1/2 h-2/3 bg-slate-600 flex flex-col gap-y-7 rounded-md p-6">
        <h1 className="text-center text-cyan-500 text-3xl font-bold">TODO LIST</h1>
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
        <div className="flex flex-col gap-y-2">
          {tasks.map((task, idx) => (
            <TaskListCard key={idx} taskList={tasks} setNewTaskList={setTasks} id={idx} task={task.task} isCompleted={task.isCompleted} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
