import { useTaskContext } from './contexts/TaskContext';
import { useParams } from 'react-router-dom';

const itemListByCategory = (category, listItems) => {
	if (!category.hasOwnProperty('id')) {
		return listItems;
	}
	const newListItems = [...listItems];
	const returnList = newListItems.filter((item) => item.category === category.id);
	return returnList;
};

const Task = () => {
	const { taskList } = useTaskContext();
	const selectedCategory = useParams();
	const newList = itemListByCategory(selectedCategory, taskList);
	return (
		<>
			{newList.map((task) => (
				<div className='taskWrap'>
					<div className='taskTitle'>task: {task.task}</div>
					<div className='taskCategory'>category: {task.category}</div>
				</div>
			))}
		</>
	);
};

export default Task;
