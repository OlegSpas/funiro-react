import React from 'react';
import './ProductPage.css';
import {Link, RouteComponentProps} from 'react-router-dom';


type props = RouteComponentProps & {


}

interface IState{

}
export default class ProductPage extends React.Component<props, IState> {




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
                            <img src="https://olegspas.github.io/FuniroProject2.0/products-landing/product-img/tables/stable6.png" alt="Product Image" />
                        </div>
                        <div className="productAbout">
                            <div className="productDetails">
                                {(this.props.location.state as any).name}
                                <h3>Stylish table</h3>
                            </div>
                            <div className="productPrice">
                                <h4>RP.150.000</h4>
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