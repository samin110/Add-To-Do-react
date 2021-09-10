
const NavBar = ({ todos }) => {
	return (
		<div className="select">

			{todos ? (
				<>
					<h2>Are Not Completed</h2>
					<div className="center">
						<span className="number">{todos} </span> <h4>Tasks</h4>
					</div>
				</>
			) :
				<h2>Add Your Todos</h2>
			}

		</div>
	);
}

export default NavBar;