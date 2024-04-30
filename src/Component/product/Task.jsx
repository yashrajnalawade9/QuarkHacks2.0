import React, { useState, useEffect } from 'react';

function Task() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/task")
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    return (
        <div className="container mx-auto px-32 py-8">
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
                        <p className="text-gray-700 mb-4">{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Task;
