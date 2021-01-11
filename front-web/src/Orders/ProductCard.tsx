

import {Product} from './types';
import './styles.css';
import { formatPrice } from './helpers';
 
type Props = {
    product: Product;
    onSelectedProduct: (product: Product) => void;
    isSelected: boolean;
}



function ProductCard({product, onSelectedProduct, isSelected}: Props) {
    return (
        <div className={`order-card-container ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelectedProduct(product)}
        >
            <h3 className="order-card-title">
                {product.name}
            
            </h3>
            <img src={product.imageUri} className="order-card-image" />
            <h3 className="order-card-price">
                {formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                {product.description}

                
                

            </div>

        </div>
    );
}

export default ProductCard;