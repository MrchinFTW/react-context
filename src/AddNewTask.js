import { useRef } from 'react';
import { useTaskContext } from './contexts/TaskContext';

const AddNewTask = () => {
	const { addTask, categoryList } = useTaskContext();
	const taskInputRef = useRef();
	const categoryInputRef = useRef();
	return (
		<>
			<label>task:</label>
			<input ref={taskInputRef} type={'text'} />
			<label>category:</label>
			<select ref={categoryInputRef}>
				{categoryList.map((category) => (
					<option value={category}>{category}</option>
				))}
			</select>
			<button
				onClick={() => {
					const taskValue = taskInputRef.current.value;
					const categoryValue = categoryInputRef.current.value;
					// console.log(taskValue, categoryValue);
					addTask(taskValue, categoryValue);
				}}
			>
				Add
			</button>
		</>
	);
};

export default AddNewTask;
