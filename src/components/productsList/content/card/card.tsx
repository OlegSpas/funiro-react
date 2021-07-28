import React from 'react';
import CardPopover from '../../popover/cardPopover';
import Popup from '../../popup/Popup';
import ConfirmationCardPopup from '../../popup/ConfirmationCardPopup';
import {Link} from 'react-router-dom';
import { WriteCard } from '../../../../data/dataWorker';

import './styles.css';
import '../../popup/Popup';

interface IProps{
	image:any;
	id:number;
	name:string;
	details:string;
	price:string;
	oldPrice:string;
	removeCard:(id:number) => void;
	editCard: (id: number, newName: string) => void;
}

interface IState{
	isOpenPopup:boolean;
	isOpenDeleteCardPopup:boolean;
	isOpenCardPopover:boolean;
	isOpenEditCardPopup:boolean;
}
export default class Card extends React.Component<IProps, IState> {
	constructor(props:IProps){
		super(props);

		this.state = {
			isOpenPopup: false,
			isOpenDeleteCardPopup:false,
			isOpenCardPopover:false,
			isOpenEditCardPopup:false
		}
	}

	handleConfirmCard = () => {
		this.props.removeCard(this.props.id)

		this.handleCloseDeleteCardPopup()
	}

	handleEditCard = (newName:string) => {
		this.props.editCard(this.props.id, newName);

		this.handleCloseEditCardPopup();
	}

	handleOpenDeleteCardPopup = () => {
		this.setState({
			isOpenDeleteCardPopup: true
		})
	}

	handleCloseDeleteCardPopup = () => {
		this.setState({
			isOpenDeleteCardPopup: false
		})
	}
////////////////////////////////////////////
	handleOpenCardPopover = () => {
		this.setState({
			isOpenCardPopover: true
		})
	}

	handleCloseCardPopover = () => {
		this.setState({
			isOpenCardPopover: false
		})
	}
///////////////////////////////////////
	handleOpenEditCardPopup = () => {
	this.setState({
		isOpenEditCardPopup: true
	})
	}

	handleCloseEditCardPopup = () => {
	this.setState({
		isOpenEditCardPopup: false
	})
	}
////////////////////////////////////////////






	handleClosePopup = () => {
		this.setState({
			isOpenPopup: false
		})
	}

	render(){
		const {image, name, details, price, oldPrice } = this.props;
		
		return (
			<div className="main-card">
				
				<div className="card-product">
					<div className="card-img">
					<div className="cardMenu">
							<svg onClick={this.handleOpenCardPopover} className="imgMenu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/></svg>
							{ this.state.isOpenCardPopover && <CardPopover close={this.handleCloseCardPopover} delete={this.handleOpenDeleteCardPopup} edit={this.handleOpenEditCardPopup} /> }
						</div>
						<img src={image}  />
				
					</div>
					
					<div className="cardContent">
						<div className="card-name">
							{name}
						</div>

						<div className="cardDetails">
								{details}
							</div>
							<div className="topPrice">
								<div className="cardPrice">
									{price}
								</div>
								<div className="cardOldPrice">
									{oldPrice}
								</div>
							</div>
						</div>
					
					<div className="hiddenCard">
						<div className="cartBtn">
						<Link to={{ pathname: '/product',
									state: {name:{name}}}}>
								<button className="AddToCart">
									Add to cart
								</button>
							</Link>
						</div>
						<div className="mediaBtn">
							<button className="mediaHelpBtn">Share</button>
							<button className="mediaHelpBtn">Like</button>
						</div>
					</div>
					
		
				
				</div>

				{ this.state.isOpenEditCardPopup && <Popup name={this.props.name} close={this.handleCloseEditCardPopup} addNewCard={this.handleEditCard} />}	
				{ this.state.isOpenDeleteCardPopup && <ConfirmationCardPopup close={this.handleCloseDeleteCardPopup} ok={this.handleConfirmCard} text={"Are you shure to delete this card?"} />}
			</div>
		)
	}
}


