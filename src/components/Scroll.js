import React from 'react';

const Scroll = (props) => {
	//return children of whats inside = CardList
	return (
		//1st brackets > js expression, 2 brackets > obj with css style
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>
		)

};

export default Scroll;