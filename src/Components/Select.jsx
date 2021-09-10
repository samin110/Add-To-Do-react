import React, { useState } from "react";
import Select from 'react-select';

const options = [
	{ value: "All", label: "All" },
	{ value: "Completed", label: "Completed" },
	{ value: "Uncompleted", label: "Uncompleted" },
];

const customStyles = {

	control: (base, state) => ({
		...base,
		background: "#7B2CBF",
		boxShadow: '1px 2px 10px #3C096C',
		// match with the menu
		borderRadius: state.isFocused ? "7px 7px 7px 7px" : 7,
		// Overwrittes the different states of border
		borderColor: '#3C096C',
		// Removes weird border around container
		// boxShadow: state.isFocused ? null : null,
		"&:hover": {
			// Overwrittes the different states of border
			borderColor: state.isFocused ? "#ff9e00" : ""
		}
	}),
	menu: base => ({
		...base,
		// override border radius to match the box
		borderRadius: 10,

		// kill the gap
		marginTop: 2
	}),
	menuList: base => ({
		...base,
		// Overwrittes the different states of border
		borderRadius: 10,
		// kill the white space on first and last option
		padding: 0
	})
};


const SelectOption = ({ onChange, selectedOptions }) => {

	return (
		<div>
			<Select
				styles={customStyles} className='selectItem'
				options={options} onChange={onChange}
				value={selectedOptions}
				placeholder='Select...'
				theme={theme => ({
					...theme,
					colors: {
						...theme.colors,
						neutral50: '#fff',  // Placeholder color
					},
				})}
			/>
		</div>
	);
}

export default SelectOption;