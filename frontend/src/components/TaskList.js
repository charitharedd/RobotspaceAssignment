import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div>
            {tasks.map(task => (
                <div key={task._id}>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <p>{task.dueDate}</p>
                    <button onClick={() => onEdit(task)}>Edit</button>
                    <button onClick={() => onDelete(task._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
