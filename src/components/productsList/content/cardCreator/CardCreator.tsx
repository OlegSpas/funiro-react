import React from 'react';
import Popup from '../../popup/Popup';
import { WriteCard } from '../../../../data/dataWorker';

import './styles.css';

interface IProps{
	AddCard:(newCard: {
		image:any;
		name: string;
		details: string;
		price: string;
		oldPrice: string;
	}) => void;
}

interface IState{
	isOpenPopup:boolean;
}

export default class CardCreator extends React.Component<IProps, IState> {
	constructor(props: IProps){
		super(props);

		this.state = {
			isOpenPopup: false
		}
	}

    addNewCard = (image:any, name:string,details:string,price:string,oldPrice:string) => {
        const newCard = {
			image:image,
			name: name,
			details:details,
			price:price,
			oldPrice:oldPrice,
		}

		WriteCard(newCard)
        
        this.props.AddCard(newCard)
	}

	handleOpenPopup = () => {
		this.setState({
			isOpenPopup: true
		})
	}

	handleClosePopup = () => {
		this.setState({
			isOpenPopup: false
		})
	}

	render(){
		return (
			<div className="cardCreator">
                <div onClick={this.handleOpenPopup} className="cardCreatorFooter">
					<svg className="addSVG" viewBox="0 0 24 24"   ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
					Add product
				</div>
				{ this.state.isOpenPopup && <Popup close={this.handleClosePopup} addNewCard={this.addNewCard} /> }
			</div>
		)
	}
}