import React from 'react'

const ProductContext = React.createContext();
//Provider
//Consumer

 class ProductProvider extends React.Component {
	render() {
		return (
			<ProductContext.Provider value="heloo from context">
				{this.props.children}				
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };