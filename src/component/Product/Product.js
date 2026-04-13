import Productdata from "../../Data/product.json";
import "./Product.css";

function addtoCart(id, imageLink) {
  console.log("add-to-cart", { id, imageLink });
}

function Products({ id, name, imageLink, addToCart }) {
  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <img className="product-image" src={imageLink} alt={name} />
      <button className="product-btn" type="button" onClick={()=>addToCart({id,name, imageLink})}>Add to Cart</button>
    </div>
  );
}
function Product({ addToCart }) {
  return (
    <div className="product-list">
      {Productdata.map((product) => (
        <Products key={product.id}  id={product.id} name={product.name} imageLink={product.imageLink} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Product;
