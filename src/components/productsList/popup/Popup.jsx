import React from 'react';

import './styles.css';

class Popup extends React.Component {

	constructor(props) {
		super(props)
		
		this.state = {
			image:props.image,
			name: props.name,
			details:props.details,
			price:props.price,
			oldPrice:props.oldPrice,
			canClose: true
		}
	}

	handleOnTextChange = (event) => {
		this.setState({
			text: event.target.value
		})
	}

	handleAddCardById = () => {
		const imageValue = URL.createObjectURL(document.getElementById('popupImage').files[0])
		const nameValue = document.getElementById("popupTextName").value
		const detailsValue = document.getElementById("popupTextDetails").value
		const priceValue = document.getElementById("popupTextPrice").value
		const oldPriceValue = document.getElementById("popupTextOldPrice").value

		this.props.addNewCard(imageValue, nameValue, detailsValue, priceValue, oldPriceValue)

		this.props.close()
	}

	handleClose = () => {
		if(this.state.canClose)
			this.props.close()
	}

	render(){
		return (
			<div onClick={this.handleClose} className="popup">
				<div 
					onMouseOver={() => this.setState({canClose: false})} 
					onMouseLeave={() => this.setState({canClose: true})}
					className="popupContent"
				>	<div className="popupTitle">
						<h3>Add card</h3>
					</div>
					<div className="popupTextArea">
						<div class="areaPopup">
							<label htmlFor="popupTextName">Enter product name</label>
							<textarea nameValue={this.state.name} onChange={this.handleOnTextChange} placeholder="Enter a product name" id="popupTextName" className="popupTextname" />
						</div>
						<div class="areaPopup">
							<label htmlFor="popupTextDetails">Describe product</label>
							<textarea detailsValue={this.state.details} onChange={this.handleOnTextChange} placeholder="Describe a product" id="popupTextDetails" className="popupTextDetails" />
						</div>
						<div class="areaPopup">
							<label htmlFor="popupTextPrice">Select price</label>
							<textarea priceValue={this.state.price} onChange={this.handleOnTextChange} placeholder="Select a Discount"id="popupTextPrice" className="popupTextPrice" />
						</div>
						<div class="areaPopup">
							<label htmlFor="popupTextOldPrice">Select oldPrice</label>
							<textarea oldPriceValue={this.state.oldPrice} onChange={this.handleOnTextChange} placeholder="Select Price "id="popupTextOldPrice" className="popupTextOldPrice" />
						</div>
						<div class="areaPopup">
							<label htmlFor="popupImage">Select photo(1)</label>
							<input imageValue={this.state.image} onChange={this.handleOnTextChange} type="file" placeholder="Select Image "id="popupImage" className="popupImage" />
						</div>
					</div>
					<div className="popupPagination">
						<button class="paginationButton"onClick={this.handleAddCardById}>
							Save
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Popup;