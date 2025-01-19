import {FC} from "react";
import {ICart} from "../../models/ICart";

type Props = {
    cart: ICart;
};

export const CartComponent: FC<Props> = ({cart}) => {
    return (
        <div className="cart-item border p-4 my-2">
            <h3>Cart ID: {cart.id}</h3>
            <p>Total: {cart.total}</p>
            <p>Discounted Total: {cart.discountedTotal}</p>
            <p>Total Products: {cart.totalProducts}</p>
            <p>Total Quantity: {cart.totalQuantity}</p>
            <div>
                <h4>Products:</h4>
                {cart.products.map(product => (
                    <div key={product.id} className="product-item">
                        <p>Title: {product.title}</p>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Discounted Total: {product.discountedTotal}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
