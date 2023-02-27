import React, { createContext, useContext, useState } from 'react';

const tasks = [
	{ category: 'home', task: 'Clean the bathroom' },
	{ category: 'home', task: 'Organize closet' },
	{ category: 'home', task: 'Plan and cook meals for the week' },
	{ category: 'home', task: 'Water the plants' },
	{ category: 'home', task: 'Take out the garbage and recycling' },
	{ category: 'work', task: 'Prepare for a presentation' },
	{ category: 'work', task: 'Write a report' },
	{ category: 'work', task: 'Respond to emails' },
	{ category: 'work', task: 'Attend a meeting' },
	{ category: 'work', task: 'Complete a project deadline' },
	{ category: 'friends', task: 'Plan a movie night' },
	{ category: 'friends', task: 'Go out for dinner' },
	{ category: 'friends', task: 'Have a game night' },
	{ category: 'friends', task: 'Go for a hike' },
	{ category: 'friends', task: 'Attend a concert' },
	{ category: 'hobbies', task: 'Read a book' },
	{ category: 'hobbies', task: 'Paint a picture' },
	{ category: 'hobbies', task: 'Practice playing an instrument' },
	{ category: 'hobbies', task: 'Go for a run' },
	{ category: 'hobbies', task: 'Work on a craft project' },
	{ category: 'family', task: 'Work on a craft project' },
];

//create context component to return
const TaskContext = createContext('');

//get the category list
let categoryList = [];
tasks.forEach((task) => {
	if (!categoryList.includes(task.category)) {
		categoryList.push(task.category);
	}
});

//context logic
const TaskProvider = ({ children }) => {
	const [taskList, setTasks] = useState(tasks);

	//custom function
	return <TaskContext.Provider value={{ taskList, setTasks }}>{children}</TaskContext.Provider>;
};

//name export for easy useing context component
export const useTaskContext = () => {
	const { taskList, setTasks } = useContext(TaskContext);

	const addTask = (taskValue, categoryValue) => {
		const newTaskList = [...taskList];
		const newTask = { task: taskValue, category: categoryValue };
		newTaskList.push(newTask);
		setTasks(newTaskList);
	};

	return {
		addTask,
		categoryList,
		taskList,
	};
};

export default TaskProvider;
