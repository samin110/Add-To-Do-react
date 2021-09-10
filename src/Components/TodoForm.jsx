import React, { useState, useRef, useEffect } from 'react';
import Todo from '../Components/Todo';

const TodoForm = (props) => {
	const inputRef = useRef();

<Todo number="123"/>
	//======= states ============
	const [input, setInput] = useState(props.edit ? props.edit.text : "");

	useEffect(() => {
		inputRef.current.focus();
	}, [])

	//======= Handlers ==========
	const changeHandler = (e) => {
		setInput(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault();
		if (!input) {
			alert("please fill fileds !!!");
			return;
		}
		props.submitTodo(input);
		setInput("");
	}

	return (
		<form onSubmit={submitHandler} >
			<input ref={inputRef} type="text" value={input} onChange={changeHandler} className='inputValue' />
			<button type="submit" className='todoButton'>{props.edit ? "Update" : "Add"}</button>
		</form>
	);
}


export default TodoForm;