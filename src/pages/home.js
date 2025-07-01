import Product_card from "../components/product_card";
import products from "../products";
function Home({addToCart}) {
    return (
      <div className="grid">
          {products.map(p =>(
          <Product_card key={p.id} addToCart={addToCart} />
          ))}
      </div>
    );

}
export default Home;