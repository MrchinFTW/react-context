import './App.css';
import TaskProvider from './contexts/TaskContext';
import Task from './Task';
import AddNewTask from './AddNewTask';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<TaskProvider>
				<nav>
					<ul>
						<li>
							<Link to={'/'}>all</Link>
						</li>
						<li>
							<Link to={'/home'}>Home</Link>
						</li>
						<li>
							<Link to={'/work'}>Work</Link>
						</li>
						<li>
							<Link to={'/friends'}>friends</Link>
						</li>
						<li>
							<Link to={'/hobbies'}>hobbies</Link>
						</li>
						<li>
							<Link to={'/family'}>family</Link>
						</li>
					</ul>
				</nav>
				<AddNewTask />
				<Routes>
					<Route path='/' element={<Task />} />
					<Route path='/:id' element={<Task />} />
				</Routes>
			</TaskProvider>
		</>
	);
}

export default App;
