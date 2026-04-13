
import "./Cart.css";
import Model from "../UI/Model";

function Cart({ showCart, toggleCart2, cartItems, Inq, Onq }) {
    return (
        <Model show={showCart} onClose={toggleCart2}>
            {/* <div>Hellow</div> */}
            <div className="cartContainer">
                {cartItems.map((item) => (
                    <div key={item.id} className="cartItem">
                        <img className="cartItemImage" src={item.imageLink} alt={item.name} />
                        <div className="cartItemDetails">
                            <h3 className="cartItemName">{item.name}</h3>
                        </div>
                        <div className="cartItemControls">
                            <span className="cartItemQuantity">Qty: {item.quantity}</span>
                            <button className="cartItemBtn" onClick={() => Inq(item.id)}>+</button>
                            <button className="cartItemBtn" onClick={() => Onq(item.id)}>-</button>
                        </div>
                    </div>
                ))}

                <div className="cartActions">
                    <button className="closecart_btn" onClick={toggleCart2}>Close Cart</button>
                    <button className="checkcart_btn" onClick={toggleCart2}>Check Cart</button>
                </div>
            </div>
        </Model>
    );
}

export default Cart;
