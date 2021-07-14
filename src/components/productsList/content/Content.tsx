import React from 'react';
import Card from './card/card';
import CardCreator from './cardCreator/CardCreator';
import {DeleteKey, ReadData } from '../../../data/dataWorker';

import './styles.css';

interface IProps{
}

interface IState{
	cards: { 
			image:any;
			name:string;
			details:string;
			price:string;
			oldPrice:string;
		}[];
}

class Content extends React.Component<IProps, IState> {
	constructor(props: IProps){
		super(props)
		this.state = ReadData();
	}


	handleAddCard = (newCard:any) => {
		const { cards } = this.state;

		cards.push(newCard);

		this.setState({
			cards: cards
		})
	}

	editCard = (cardId:number, newName:string) => {
			const { cards } = this.state;

	
			cards[cardId].name = newName;

	
			
	
			this.setState({
				cards: cards
			})
	}

	deleteCard = (cardId:number) => {
		const { cards } = this.state;
		const cardToDelete = cards.splice(cardId, 1);
		console.log(cardToDelete);
		DeleteKey(cardToDelete[0].name);
		

		cards.splice(cardId, 1)

		this.setState({
			cards: cards
		})
	}

	render(){
		const { cards } = this.state;

		console.log(this.state)

		return (
			<div className="content">
				{
					cards.map((item, index) => (
						<Card
							image={item.image} 
							name={item.name}
							details={item.details}
							price={item.price}
							oldPrice={item.oldPrice}
							id={index}
							removeCard={this.deleteCard}
							editCard={this.editCard}
						/>
					))

				}
				<CardCreator AddCard={this.handleAddCard} />
			</div>
		)
	}
}




export default Content;