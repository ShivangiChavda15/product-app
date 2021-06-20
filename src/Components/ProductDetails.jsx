import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TableBody
} from '@material-ui/core';

class ProductDetails extends React.PureComponent {
    render() {
        const { products } = this.props;

        return (
            <div className="productDetails">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Product Id</TableCell>
                            <TableCell>Product Name</TableCell>
                        </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                products.length > 0 && products.map((product, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{product.productId}</TableCell>
                                            <TableCell>{product.productName}</TableCell>
                                        </TableRow> 
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default ProductDetails;
