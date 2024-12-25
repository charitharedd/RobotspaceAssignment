import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
    const [task, setTask] = useState({
        name: '',
        description: '',
        dueDate: '',
        status: 'Pending',
        priority: 'Low',
    });

    const handleChange = e => setTask({ ...task, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(task);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} placeholder="Name" />
            <textarea name="description" onChange={handleChange} placeholder="Description" />
            <input type="date" name="dueDate" onChange={handleChange} />
            <select name="status" onChange={handleChange}>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>
            <select name="priority" onChange={handleChange}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TaskForm;
