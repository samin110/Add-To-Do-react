import React, { useState, useEffect } from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import NavBar from './NavBar';
import SelectOption from './Select';

const TodoApp = () => {
	//=========== todos state ==============
	const [todos, setTodos] = useState([]);
	const [filterTodos, setFilterTodos] = useState([]);
	const [selectedOption, setSelectedOptions] = useState("All");

	useEffect(() => {
		filterTodo(selectedOption.value);
	}, [todos, selectedOption]



	)










	//=========== Handlers ==============
	const addTodo = (input) => {
		const newTodo = {
			id: Math.floor(Math.random() * 1000),
			text: input,
			isCompleted: false,
		};
		setTodos([...todos, newTodo]);
	}

	const changeHandler = (e) => {
		setSelectedOptions(e);
		filterTodo(e.value);
	}

	const filterTodo = (status) => {
		switch (status) {
			case "Completed":
				setFilterTodos(todos.filter(t => t.isCompleted));
				break;
			case "Uncompleted":
				setFilterTodos(todos.filter(t => !t.isCompleted))
				break;
			default:
				setFilterTodos(todos)
		}
	}

	const completeTodo = (id) => {
		const index = todos.findIndex((todo) => todo.id === id);

		const selectedTodo = { ...todos[index] };

		selectedTodo.isCompleted = !selectedTodo.isCompleted;
		const updatedTodos = [...todos];
		updatedTodos[index] = selectedTodo;

		setTodos(updatedTodos);
	}

	const removeHandler = (id) => {
		const todoFilter = todos.filter((todo) => todo.id !== id);
		setTodos(todoFilter);
	}

	const updatedTodo = (id, newValue) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const selectedTodo = { ...todos[index] };
		selectedTodo.text = newValue;
		const updatedTodos = [...todos];
		updatedTodos[index] = selectedTodo;
		setTodos(updatedTodos);
	}
	return (
		<div className="container">

			<div className="navbar">
				<NavBar
					todos={todos.filter(todo => !todo.isCompleted).length}
				/>

				<SelectOption todos={todos}
					filterTodo={filterTodo}


					onChange={changeHandler}
					selectedOptions={setSelectedOptions}
				/>
			</div>

			<TodoForm
				submitTodo={addTodo}
			/>

			<TodoList
				todos={filterTodos}
				onComplete={completeTodo}
				remove={removeHandler}
				onUpdateTodo={updatedTodo}
			/>
		</div>
	);
}

export default TodoApp;