import React from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

export default class ProductList extends React.Component {
	state={
		products: storeProducts
	};
	render() {
		console.log(this.state.products);

		return (
			<React.Fragment>
				<div className="py-5">
					<div className='container'>
						<Title name="our" title="products" />

							<div className="row">
								<ProductConsumer>
									{hello =>{
										return <h1>{hello}</h1>;

									}}
								</ProductConsumer>
							</div>
						</div>
					</div>
				<div>
			</React.Fragment>
				//<Product />
				
			
		);
	}
}