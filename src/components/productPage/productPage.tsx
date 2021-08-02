import React from 'react';
import './ProductPage.css';
import {Link, RouteComponentProps} from 'react-router-dom';


type props =  RouteComponentProps


interface IState{

}
export default class ProductPage extends React.Component<props, IState> {

    constructor(props:props){
		super(props);

		this.state = {

		}
	}


	render(){
		return (
            
            <section className="ProductPage">
                <div className="container">
                    <header className="headerPage">
                        <Link to="/" >
                            <button className="btnBack">
                                Back    
                            </button>
                        </Link>
                    </header>
                    <main className="pageContent">
                        <div className="productImage">
                            <img src={(this.props.location.state as any).image} alt="Product Image" />
                        </div>
                        <div className="productAbout">
                            <div className="productDetails">
                                <h2>{(this.props.location.state as any).name}</h2>
                                <h3>{(this.props.location.state as any).details}</h3>
                            </div>
                            <div className="productPrice">
                                <h4>{(this.props.location.state as any).price}</h4>
                                <button className="buyBtn">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </main>
                    <footer className="pageFooter">
                        <div className="discribeProduct">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde veniam ipsa placeat, asperiores vitae eos ad, distinctio nostrum recusandae officia officiis, sunt aliquid maxime quae incidunt veritatis. Ab distinctio veritatis, placeat facere illo magnam aut esse consectetur sed nobis ut hic perspiciatis ipsa saepe ipsam amet exercitationem reprehenderit! Quibusdam quia est consequatur suscipit sequi culpa consequuntur distinctio nihil accusamus, maiores eveniet modi obcaecati aliquam magni odio asperiores dolores? Excepturi neque, corporis autem iure sequi architecto distinctio fugiat tenetur nesciunt quaerat quos, est aspernatur quo labore voluptates. Neque, magni accusamus, rem saepe natus sed dolores corporis, non cum distinctio tenetur vitae.</p>
                        </div>
                    </footer>
                </div>
            </section>
		)
	}
}