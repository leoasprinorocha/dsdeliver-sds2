
import ProductsList from './ProductsList';
import {Product} from './types';
import './styles.css';
 
type Props = {
    product: Product;
}

function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL' ,
    });

    return formatter.format(price)
}

function ProductCard({product}: Props) {
    return (
        <div className="order-card-container">
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