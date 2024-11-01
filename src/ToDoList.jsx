import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = index => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                placeholder="Tambahkan tugas baru"
            />
            <button onClick={addTask}>Tambah Tugas</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} onClick={() => toggleTask(index)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;