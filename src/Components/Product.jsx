import React from 'react';
import {
    TextField,
    Button
} from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct } from '../store/actions/AddProduct';
import ProductDetails from './ProductDetails';

class Product extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            productId: 1,
            productName: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value,
        });
    }

    onSubmit() {
        this.props.addProduct(this.state);
    }

    render() {
        return (
            <div className="productContainer">
                <div>
                    <TextField
                        id="standard-basic"
                        label="Product Id"
                        onChange={this.handleInputChange}
                        name="productId"
                        value={this.state.productId}
                    />
                </div>

                <div>
                    <TextField
                        id="standard-basic"
                        label="Product Name"
                        onChange={this.handleInputChange}
                        name="productName"
                        value={this.state.ProductName}
                    />
                </div>

                <div className="btnContainer">
                    <Button variant="contained" color="secondary" onClick={this.onSubmit}>
                        Add Product
                    </Button>
                </div>

                <div>
                    {this.props.products.length > 0 && <ProductDetails products={this.props.products} />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.AddProductReducer.products,
    }
}

const mapDispatchToProps = (dispatch) => {  
    return {    
        dispatch,    
        ...bindActionCreators({ addProduct }, dispatch),  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
