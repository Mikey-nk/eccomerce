function ProductCard({product,addToCart}){
    return(
      <div className="card">
          <img src={product.image} alt={product.name} width="100%"/>
          <h3>{product.name}</h3>
          <p> KES {product.price}</p>
          <button onClick={()=> addToCart(product)}>Add to Cart</button>
      </div>
    );
}
export default ProductCard;
