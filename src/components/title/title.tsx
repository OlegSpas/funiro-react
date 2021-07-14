import React from 'react';
import '../../fonts/funiroFonts.css'
import './stylesTitle.css'


interface IProps {
}

interface IState {
}

export default class Title extends React.Component<IProps, IState> {

	render(){
		return(
			<div className="productsTitle">
                <h2>Our Products</h2>
            </div>
		)
	}
}